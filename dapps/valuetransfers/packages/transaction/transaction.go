package transaction

import (
	"crypto/sha256"
	"errors"
	"fmt"
	"sync"
	"time"

	"github.com/iotaledger/hive.go/identity"

	"github.com/iotaledger/hive.go/marshalutil"
	"github.com/iotaledger/hive.go/objectstorage"
	"github.com/iotaledger/hive.go/stringify"
	"github.com/mr-tron/base58"
	"golang.org/x/crypto/blake2b"

	"github.com/iotaledger/goshimmer/dapps/valuetransfers/packages/address"
	"github.com/iotaledger/goshimmer/dapps/valuetransfers/packages/address/signaturescheme"
)

var (
	// ErrMaxDataPayloadSizeExceeded is returned if the data payload size is exceeded.
	ErrMaxDataPayloadSizeExceeded = errors.New("maximum data payload size exceeded")
)

const (
	// MaxTransactionInputCount is the maximum number of inputs a transaction can have
	MaxTransactionInputCount = 100
)

// region IMPLEMENT Transaction ////////////////////////////////////////////////////////////////////////////////////////////

// Transaction represents a value transfer for IOTA. It consists out of a number of inputs, a number of outputs and their
// corresponding signature. Additionally, there is an optional data field, that can be used to include payment details or
// processing information.
type Transaction struct {
	objectstorage.StorableObjectFlags

	inputs     *Inputs
	outputs    *Outputs
	signatures *Signatures

	id      *ID
	idMutex sync.RWMutex

	essenceBytes      []byte
	essenceBytesMutex sync.RWMutex

	signatureBytes      []byte
	signatureBytesMutex sync.RWMutex

	dataPayload      []byte
	dataPayloadMutex sync.RWMutex

	bytes      []byte
	bytesMutex sync.RWMutex

	timestamp           time.Time
	accessManaNodeID    identity.ID
	consensusManaNodeID identity.ID
}

// New creates a new Transaction from the given details. The signatures are omitted as signing requires us to marshal
// the transaction into a sequence of bytes and these bytes are unknown at the time of the creation of the Transaction.
func New(inputs *Inputs, outputs *Outputs) *Transaction {
	return &Transaction{
		inputs:     inputs,
		outputs:    outputs,
		signatures: NewSignatures(),
	}
}

// FromBytes unmarshals a Transaction from a sequence of bytes.
func FromBytes(bytes []byte, optionalTargetObject ...*Transaction) (result *Transaction, consumedBytes int, err error) {
	marshalUtil := marshalutil.New(bytes)
	result, err = Parse(marshalUtil, optionalTargetObject...)
	consumedBytes = marshalUtil.ReadOffset()

	return
}

// FromStorageKey is a factory method that creates a new Transaction instance from a storage key of the objectstorage.
// It is used by the objectstorage, to create new instances of this entity.
func FromStorageKey(key []byte, optionalTargetObject ...*Transaction) (result objectstorage.StorableObject, consumedBytes int, err error) {
	// determine the target object that will hold the unmarshaled information
	switch len(optionalTargetObject) {
	case 0:
		result = &Transaction{}
	case 1:
		result = optionalTargetObject[0]
	default:
		panic("too many arguments in call to FromStorageKey")
	}

	marshalUtil := marshalutil.New(key)
	id, err := ParseID(marshalUtil)
	if err != nil {
		return
	}
	result.(*Transaction).id = &id

	return
}

// Parse unmarshals a Transaction using the given marshalUtil (for easier marshaling/unmarshaling).
func Parse(marshalUtil *marshalutil.MarshalUtil, optionalTargetObject ...*Transaction) (result *Transaction, err error) {
	// determine the target object that will hold the unmarshaled information
	switch len(optionalTargetObject) {
	case 0:
		result = &Transaction{}
	case 1:
		result = optionalTargetObject[0]
	default:
		panic("too many arguments in call to Parse")
	}

	_, err = marshalUtil.Parse(func(data []byte) (parseResult interface{}, parsedBytes int, parseErr error) {
		parsedBytes, parseErr = result.UnmarshalObjectStorageValue(data)

		return
	})

	return
}

// ID returns the identifier of this Transaction.
func (transaction *Transaction) ID() ID {
	// acquire lock for reading id
	transaction.idMutex.RLock()

	// return if id has been calculated already
	if transaction.id != nil {
		defer transaction.idMutex.RUnlock()

		return *transaction.id
	}

	// switch to write lock
	transaction.idMutex.RUnlock()
	transaction.idMutex.Lock()
	defer transaction.idMutex.Unlock()

	// return if id has been calculated in the mean time
	if transaction.id != nil {
		return *transaction.id
	}

	// otherwise calculate the id
	idBytes := blake2b.Sum256(transaction.Bytes())
	id, _, err := IDFromBytes(idBytes[:])
	if err != nil {
		panic(err)
	}

	// cache result for later calls
	transaction.id = &id

	return id
}

// Inputs returns the list of Inputs that were consumed by this Transaction.
func (transaction *Transaction) Inputs() *Inputs {
	return transaction.inputs
}

// Outputs returns the list of Outputs where this Transaction moves its consumed funds.
func (transaction *Transaction) Outputs() *Outputs {
	return transaction.outputs
}

// Timestamp returns the timestamp of the transaction
func (transaction *Transaction) Timestamp() time.Time {
	return transaction.timestamp
}

// AccessManaNodeID returns the node ID to whom access mana is pledged to
func (transaction *Transaction) AccessManaNodeID() identity.ID {
	return transaction.accessManaNodeID
}

// ConsensusManaNodeID returns the node ID to whom consensus mana is pledged to
func (transaction *Transaction) ConsensusManaNodeID() identity.ID {
	return transaction.consensusManaNodeID
}

// SignaturesValid returns true if the Signatures in this transaction
func (transaction *Transaction) SignaturesValid() bool {
	signaturesValid := true
	transaction.inputs.ForEachAddress(func(address address.Address) bool {
		if signature, exists := transaction.signatures.Get(address); !exists || !signature.IsValid(transaction.EssenceBytes()) {
			signaturesValid = false

			return false
		}

		return true
	})

	return signaturesValid
}

// Signatures returns all the signatures in this transaction.
func (transaction *Transaction) Signatures() (signatures []signaturescheme.Signature) {
	transaction.inputs.ForEachAddress(func(address address.Address) bool {
		signature, exists := transaction.signatures.Get(address)
		if !exists || !signature.IsValid(transaction.EssenceBytes()) {
			return false
		}
		signatures = append(signatures, signature)
		return true
	})

	return signatures
}

// InputsCountValid returns true if the number of inputs in this transaction is not greater than MaxTransactionInputCount.
func (transaction *Transaction) InputsCountValid() bool {
	return transaction.inputs.Size() <= MaxTransactionInputCount
}

// EssenceBytes return the bytes of the transaction excluding the Signatures. These bytes are later signed and used to
// generate the Signatures.
func (transaction *Transaction) EssenceBytes() []byte {
	// acquire read lock on essenceBytes
	transaction.essenceBytesMutex.RLock()

	// return essenceBytes if the object has been marshaled already
	if transaction.essenceBytes != nil {
		defer transaction.essenceBytesMutex.RUnlock()

		return transaction.essenceBytes
	}

	// switch to write lock
	transaction.essenceBytesMutex.RUnlock()
	transaction.essenceBytesMutex.Lock()
	defer transaction.essenceBytesMutex.Unlock()

	// return essenceBytes if the object has been marshaled in the mean time
	if essenceBytes := transaction.essenceBytes; essenceBytes != nil {
		return essenceBytes
	}

	// create marshal helper
	marshalUtil := marshalutil.New()

	// marshal inputs
	marshalUtil.WriteBytes(transaction.inputs.Bytes())

	// marshal outputs
	marshalUtil.WriteBytes(transaction.outputs.Bytes())

	// marshal dataPayload size
	marshalUtil.WriteUint32(transaction.DataPayloadSize())

	// marshal dataPayload data
	marshalUtil.WriteBytes(transaction.dataPayload)

	// marshall timestamp
	marshalUtil.WriteTime(transaction.timestamp)

	// marshal accessManaNodeID
	marshalUtil.WriteBytes(transaction.accessManaNodeID.Bytes())

	// marshal consensusManaNodeID
	marshalUtil.WriteBytes(transaction.consensusManaNodeID.Bytes())

	// store marshaled result
	transaction.essenceBytes = marshalUtil.Bytes()
	transaction.SetModified()

	return transaction.essenceBytes
}

// SignatureBytes returns the bytes of all of the signatures in the Transaction.
func (transaction *Transaction) SignatureBytes() []byte {
	transaction.signatureBytesMutex.RLock()
	if transaction.signatureBytes != nil {
		defer transaction.signatureBytesMutex.RUnlock()

		return transaction.signatureBytes
	}

	transaction.signatureBytesMutex.RUnlock()
	transaction.signatureBytesMutex.Lock()
	defer transaction.signatureBytesMutex.Unlock()

	if transaction.signatureBytes != nil {
		return transaction.signatureBytes
	}

	// generate signatures
	transaction.signatureBytes = transaction.signatures.Bytes()

	return transaction.signatureBytes
}

// Bytes returns a marshaled version of this Transaction (essence + signatures).
func (transaction *Transaction) Bytes() []byte {
	// acquire read lock on bytes
	transaction.bytesMutex.RLock()

	// return bytes if the object has been marshaled already
	if transaction.bytes != nil {
		defer transaction.bytesMutex.RUnlock()

		return transaction.bytes
	}

	// switch to write lock
	transaction.bytesMutex.RUnlock()
	transaction.bytesMutex.Lock()
	defer transaction.bytesMutex.Unlock()

	// return bytes if the object has been marshaled in the mean time
	if bytes := transaction.bytes; bytes != nil {
		return bytes
	}

	// create marshal helper
	marshalUtil := marshalutil.New()

	// marshal essence bytes
	marshalUtil.WriteBytes(transaction.EssenceBytes())

	// marshal signature bytes
	marshalUtil.WriteBytes(transaction.SignatureBytes())

	// store marshaled result
	transaction.bytes = marshalUtil.Bytes()

	return transaction.bytes
}

// Sign adds a new signature to the Transaction.
func (transaction *Transaction) Sign(signature signaturescheme.SignatureScheme) *Transaction {
	transaction.signatures.Add(signature.Address(), signature.Sign(transaction.EssenceBytes()))
	transaction.SetModified()
	return transaction
}

// PutSignature validates and adds signature to the transaction
func (transaction *Transaction) PutSignature(signature signaturescheme.Signature) error {
	if !signature.IsValid(transaction.EssenceBytes()) {
		return errors.New("PutSignature: invalid signature")
	}
	transaction.signatures.Add(signature.Address(), signature)
	transaction.SetModified()
	return nil
}

// String returns a human readable version of this Transaction (for debug purposes).
func (transaction *Transaction) String() string {
	id := transaction.ID()

	return stringify.Struct("Transaction"+fmt.Sprintf("(%p)", transaction),
		stringify.StructField("id", base58.Encode(id[:])),
		stringify.StructField("inputs", transaction.inputs),
		stringify.StructField("outputs", transaction.outputs),
		stringify.StructField("timestamp", transaction.timestamp.String()),
		stringify.StructField("accessManaNodeID", transaction.accessManaNodeID.String()),
		stringify.StructField("consensusManaNodeID", transaction.consensusManaNodeID.String()),
		stringify.StructField("signatures", transaction.signatures),
		stringify.StructField("dataPayloadSize", uint64(transaction.DataPayloadSize())),
	)
}

// SetDataPayload sets yhe dataPayload and its type
func (transaction *Transaction) SetDataPayload(data []byte) error {
	transaction.dataPayloadMutex.Lock()
	defer transaction.dataPayloadMutex.Unlock()

	transaction.dataPayload = data
	return nil
}

// SetTimestamp sets the timestamp of a transaction
func (transaction *Transaction) SetTimestamp(timestamp time.Time) {
	transaction.timestamp = timestamp
}

// SetAccessManaNodeID sets the nodeID to pledge access mana to
func (transaction *Transaction) SetAccessManaNodeID(nodeID identity.ID) {
	transaction.accessManaNodeID = nodeID
}

// SetConsensusManaNodeID sets the nodeID to pledge consensus mana to
func (transaction *Transaction) SetConsensusManaNodeID(nodeID identity.ID) {
	transaction.consensusManaNodeID = nodeID
}

// GetDataPayload gets the dataPayload and its type
func (transaction *Transaction) GetDataPayload() []byte {
	transaction.dataPayloadMutex.RLock()
	defer transaction.dataPayloadMutex.RUnlock()

	return transaction.dataPayload
}

// DataPayloadSize returns the size of the dataPayload as uint32.
// nil payload as size 0
func (transaction *Transaction) DataPayloadSize() uint32 {
	transaction.dataPayloadMutex.RLock()
	defer transaction.dataPayloadMutex.RUnlock()

	return uint32(len(transaction.dataPayload))
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// region IMPLEMENT StorableObject interface ///////////////////////////////////////////////////////////////////////////

// define contract (ensure that the struct fulfills the given interface)
var _ objectstorage.StorableObject = &Transaction{}

// ObjectStorageKey returns the bytes that are used as a key when storing the Transaction in an objectstorage.
func (transaction *Transaction) ObjectStorageKey() []byte {
	return transaction.ID().Bytes()
}

// Update is disabled but needs to be implemented to be compatible with the objectstorage.
func (transaction *Transaction) Update(other objectstorage.StorableObject) {
	panic("update forbidden")
}

// ObjectStorageValue returns a bytes representation of the Transaction by implementing the encoding.BinaryMarshaler interface.
func (transaction *Transaction) ObjectStorageValue() []byte {
	return transaction.Bytes()
}

// UnmarshalObjectStorageValue unmarshals the bytes that are stored in the value of the objectstorage.
func (transaction *Transaction) UnmarshalObjectStorageValue(bytes []byte) (consumedBytes int, err error) {
	// initialize helper
	marshalUtil := marshalutil.New(bytes)

	// unmarshal inputs
	parsedInputs, err := marshalUtil.Parse(func(data []byte) (interface{}, int, error) { return InputsFromBytes(data) })
	if err != nil {
		return
	}
	transaction.inputs = parsedInputs.(*Inputs)

	// unmarshal outputs
	parsedOutputs, err := marshalUtil.Parse(func(data []byte) (interface{}, int, error) { return OutputsFromBytes(data) })
	if err != nil {
		return
	}
	transaction.outputs = parsedOutputs.(*Outputs)

	// unmarshal data payload size
	var dataPayloadSize uint32
	dataPayloadSize, err = marshalUtil.ReadUint32()
	if err != nil {
		return
	}

	// unmarshal data payload
	transaction.dataPayload, err = marshalUtil.ReadBytes(int(dataPayloadSize))
	if err != nil {
		return
	}

	// unmarshal timestamp
	transaction.timestamp, err = marshalUtil.ReadTime()
	if err != nil {
		return
	}

	// unmarshal accessManaNodeID
	accessNodeIDBytes, err := marshalUtil.ReadBytes(sha256.Size)
	if err != nil {
		return
	}
	copy(transaction.accessManaNodeID[:], accessNodeIDBytes)

	// unmarshal consensusManaNodeID
	consensusNodeIDBytes, err := marshalUtil.ReadBytes(sha256.Size)
	if err != nil {
		return
	}
	copy(transaction.consensusManaNodeID[:], consensusNodeIDBytes)

	// store essence bytes
	essenceBytesCount := marshalUtil.ReadOffset()
	transaction.essenceBytes = make([]byte, essenceBytesCount)
	copy(transaction.essenceBytes, bytes[:essenceBytesCount])

	// unmarshal outputs
	parsedSignatures, err := marshalUtil.Parse(func(data []byte) (interface{}, int, error) { return SignaturesFromBytes(data) })
	if err != nil {
		return
	}
	transaction.signatures = parsedSignatures.(*Signatures)

	// store signature bytes
	signatureBytesCount := marshalUtil.ReadOffset() - essenceBytesCount
	transaction.signatureBytes = make([]byte, signatureBytesCount)
	copy(transaction.signatureBytes, bytes[essenceBytesCount:essenceBytesCount+signatureBytesCount])

	// return the number of bytes we processed
	consumedBytes = essenceBytesCount + signatureBytesCount

	// store bytes, so we don't have to marshal manually
	transaction.bytes = bytes[:consumedBytes]

	return
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// CachedTransaction is a wrapper for the object storage, that takes care of type casting the Transaction objects.
// Since go does not have generics (yet), the object storage works based on the generic "interface{}" type, which means
// that we have to regularly type cast the returned objects, to match the expected type. To reduce the burden of
// manually managing these type, we create a wrapper that does this for us. This way, we can consistently handle the
// specialized types of Transaction, without having to manually type cast over and over again.
type CachedTransaction struct {
	objectstorage.CachedObject
}

// Retain overrides the underlying method to return a new CachedTransaction instead of a generic CachedObject.
func (cachedTransaction *CachedTransaction) Retain() *CachedTransaction {
	return &CachedTransaction{cachedTransaction.CachedObject.Retain()}
}

// Consume  overrides the underlying method to use a CachedTransaction object instead of a generic CachedObject in the
// consumer).
func (cachedTransaction *CachedTransaction) Consume(consumer func(tx *Transaction)) bool {
	return cachedTransaction.CachedObject.Consume(func(object objectstorage.StorableObject) {
		consumer(object.(*Transaction))
	})
}

// Unwrap provides a way to retrieve a type casted version of the underlying object.
func (cachedTransaction *CachedTransaction) Unwrap() *Transaction {
	untypedTransaction := cachedTransaction.Get()
	if untypedTransaction == nil {
		return nil
	}

	typeCastedTransaction := untypedTransaction.(*Transaction)
	if typeCastedTransaction == nil || typeCastedTransaction.IsDeleted() {
		return nil
	}

	return typeCastedTransaction
}
