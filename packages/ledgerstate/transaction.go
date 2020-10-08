package ledgerstate

import (
	"crypto/rand"
	"fmt"

	"github.com/iotaledger/goshimmer/packages/tangle/payload"
	"github.com/iotaledger/hive.go/byteutils"
	"github.com/iotaledger/hive.go/marshalutil"
	"github.com/iotaledger/hive.go/stringify"
	"github.com/mr-tron/base58"
	"golang.org/x/xerrors"
)

// region TransactionType //////////////////////////////////////////////////////////////////////////////////////////////

// TransactionType represents the Type of the Transaction in its role as a Payload.
var TransactionType = payload.NewType(1, "TransactionType", TransactionPayloadUnmarshaler)

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// region TransactionID ////////////////////////////////////////////////////////////////////////////////////////////////

// TransactionIDLength contains the amount of bytes that a marshaled version of the ID contains.
const TransactionIDLength = 32

// TransactionID is the type that represents the identifier of a Transaction.
type TransactionID [TransactionIDLength]byte

// GenesisTransactionID represents the genesis ID.
var GenesisTransactionID TransactionID

// TransactionIDFromBase58 creates a TransactionID from a base58 encoded string.
func TransactionIDFromBase58(base58String string) (id TransactionID, err error) {
	// decode string
	bytes, err := base58.Decode(base58String)
	if err != nil {
		err = xerrors.Errorf("failed to decode base58 encoded TransactionID (%v): %w", err, ErrBase58DecodeFailed)
		return
	}

	// sanitize input
	if len(bytes) != TransactionIDLength {
		err = fmt.Errorf("base58 decoded TransactionID '%s' does not match expected length of %d bytes", base58String, TransactionIDLength)
		return
	}

	// copy bytes to result
	copy(id[:], bytes)

	return
}

// TransactionIDFromBytes unmarshals a TransactionID from a sequence of bytes.
func TransactionIDFromBytes(bytes []byte) (result TransactionID, consumedBytes int, err error) {
	// parse the bytes
	marshalUtil := marshalutil.New(bytes)
	idBytes, idErr := marshalUtil.ReadBytes(TransactionIDLength)
	if idErr != nil {
		err = idErr

		return
	}
	copy(result[:], idBytes)
	consumedBytes = marshalUtil.ReadOffset()

	return
}

// TransactionIDFromMarshalUtil is a wrapper for simplified unmarshaling of TransactionIDs from a byte stream using the
// marshalUtil package.
func TransactionIDFromMarshalUtil(marshalUtil *marshalutil.MarshalUtil) (TransactionID, error) {
	id, err := marshalUtil.Parse(func(data []byte) (interface{}, int, error) { return TransactionIDFromBytes(data) })
	if err != nil {
		return TransactionID{}, err
	}

	return id.(TransactionID), nil
}

// RandomTransactionID creates a random TransactionID which can for example be used in unit tests.
func RandomTransactionID() (id TransactionID) {
	// generate a random sequence of bytes
	idBytes := make([]byte, TransactionIDLength)
	if _, err := rand.Read(idBytes); err != nil {
		panic(err)
	}

	// copy the generated bytes into the result
	copy(id[:], idBytes)

	return
}

// Bytes marshals the ID into a sequence of bytes.
func (i TransactionID) Bytes() []byte {
	return i[:]
}

// String creates a human readable base58 encoded version of the TransactionID.
func (i TransactionID) String() string {
	return base58.Encode(i[:])
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// region Transaction //////////////////////////////////////////////////////////////////////////////////////////////////

type Transaction struct {
	payloadType  payload.Type
	essence      *TransactionEssence
	unlockBlocks UnlockBlocks
}

// TransactionPayloadUnmarshaler returns a Payload typed Transaction and is required for the payload Type definition.
func TransactionPayloadUnmarshaler(data []byte) (payload.Payload, error) {
	return TransactionFromMarshalUtil(marshalutil.New(data))
}

// TransactionFromMarshalUtil unmarshals a Transaction using a MarshalUtil (for easier unmarshaling).
func TransactionFromMarshalUtil(marshalUtil *marshalutil.MarshalUtil) (transaction *Transaction, err error) {
	// TODO: FINISH
	transaction = &Transaction{}
	if transaction.unlockBlocks, err = UnlockBlocksFromMarshalUtil(marshalUtil); err != nil {
		err = xerrors.Errorf("failed to parse UnlockBlocks: %w", err)
		return
	}

	return
}

// Type returns the Type of the Payload.
func (t *Transaction) Type() payload.Type {
	return TransactionType
}

func (t *Transaction) Essence() *TransactionEssence {
	return t.essence
}

func (t *Transaction) UnlockBlocks() UnlockBlocks {
	return t.unlockBlocks
}

func (t *Transaction) UnsignedBytes() []byte {
	return t.essence.Bytes()
}

// Bytes returns a marshaled version of the Transaction.
func (t *Transaction) Bytes() []byte {
	return byteutils.ConcatBytes(t.essence.Bytes(), t.unlockBlocks.Bytes())
}

// String returns a human readable version of the Transaction.
func (t *Transaction) String() string {
	return stringify.Struct("Transaction",
		stringify.StructField("essence", t.Essence()),
		stringify.StructField("unlockBlocks", t.UnlockBlocks()),
	)
}

// code contract (make sure the struct implements all required methods)
var _ payload.Payload = &Transaction{}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// region TransactionEssence ///////////////////////////////////////////////////////////////////////////////////////////

type TransactionEssence struct {
	inputs Inputs
}

// Bytes returns a marshaled version of the TransactionEssence.
func (t *TransactionEssence) Bytes() []byte {
	return nil
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////
