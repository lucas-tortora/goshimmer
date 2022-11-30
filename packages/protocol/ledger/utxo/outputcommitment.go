package utxo

import (
	"context"

	"github.com/cockroachdb/errors"
	"github.com/iotaledger/hive.go/core/cerrors"
	"github.com/iotaledger/hive.go/core/generics/lo"
	"github.com/iotaledger/hive.go/core/serix"
	"github.com/iotaledger/hive.go/core/types"
	"gitlab.com/NebulousLabs/merkletree/merkletree-blake"
)

// region OutputCommitment /////////////////////////////////////////////////////////////////////////////////////////////

// OutputCommitment represents a cryptographic commitment to the Outputs generated by a Transaction.
type OutputCommitment struct {
	StateRoot       types.Identifier `serix:"0"`
	NumberOfOutputs uint64           `serix:"1"`

	outputs *Outputs
}

// FromOutputs creates a new OutputCommitment from the given Outputs.
func (o *OutputCommitment) FromOutputs(outputs ...Output) (err error) {
	o.NumberOfOutputs = uint64(len(outputs))

	merkleTree := merkletree.New()
	for _, output := range outputs {
		serializedOutput, serializationErr := output.Bytes()
		if serializationErr != nil {
			return errors.Errorf("failed to serialize Output: %w", serializationErr)
		}

		merkleTree.Push(serializedOutput)
	}
	o.StateRoot = merkleTree.Root()

	o.outputs = NewOutputs(outputs...)

	return nil
}

// Proof generates a proof that the Output at the given index is included in the OutputCommitment.
func (o *OutputCommitment) Proof(outputIndex uint64) (proof *OutputCommitmentProof, err error) {
	if o.outputs == nil {
		return nil, errors.Errorf("proofs can only be created when initialized with outputs: %w", cerrors.ErrFatal)
	}

	merkleTree := merkletree.New()
	if err = merkleTree.SetIndex(outputIndex); err != nil {
		return nil, errors.Errorf("unable to set index: %w", err)
	}

	if err = o.outputs.ForEach(func(output Output) error {
		serializedOutput, serializationErr := output.Bytes()
		if serializationErr != nil {
			return errors.Errorf("failed to serialize Output: %w", serializationErr)
		}

		merkleTree.Push(serializedOutput)

		return nil
	}); err != nil {
		return nil, errors.Errorf("failed to add Outputs to merkle tree: %w", err)
	}

	proof = &OutputCommitmentProof{
		OutputCommitment: new(OutputCommitment),
	}
	proof.OutputCommitment.StateRoot, _, proof.ProofSet, proof.ProofIndex, proof.OutputCommitment.NumberOfOutputs = merkleTree.Prove()

	return proof, nil
}

// Bytes returns a serialized version of the OutputCommitment.
func (o *OutputCommitment) Bytes() (serialized []byte) {
	return lo.PanicOnErr(serix.DefaultAPI.Encode(context.Background(), o))
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// region OutputCommitmentProof ////////////////////////////////////////////////////////////////////////////////////////

// OutputCommitmentProof is a cryptographic proof that an Output is part of an OutputCommitment.
type OutputCommitmentProof struct {
	OutputCommitment *OutputCommitment `serix:"0"`
	ProofSet         [][32]byte        `serix:"1,lengthPrefixType=uint32"`
	ProofIndex       uint64            `serix:"2"`
}

// Validate validates the proof and checks if the given Output is indeed part of the OutputCommitment that is referenced
// in the proof.
func (o *OutputCommitmentProof) Validate(output Output) (err error) {
	outputBytes, err := output.Bytes()
	if err != nil {
		return errors.Errorf("failed to serialize Output: %w", err)
	}

	outputHash := merkletree.LeafSum(outputBytes)
	if o.ProofSet[0] != outputHash {
		return errors.Errorf("invalid proof: output hash %x does not match expected value of %x: %w", outputHash, o.ProofSet[0], cerrors.ErrFatal)
	}

	if !merkletree.VerifyProof(o.OutputCommitment.StateRoot, o.ProofSet, o.ProofIndex, o.OutputCommitment.NumberOfOutputs) {
		return errors.Errorf("invalid proof - merkle proof is invalid: %w", cerrors.ErrFatal)
	}

	return nil
}

// Bytes returns a serialized version of the OutputCommitmentProof.
func (o *OutputCommitmentProof) Bytes() (bytes []byte) {
	return lo.PanicOnErr(serix.DefaultAPI.Encode(context.Background(), o))
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////