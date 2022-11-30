package notarization

import (
	"github.com/iotaledger/hive.go/core/generics/event"

	"github.com/iotaledger/goshimmer/packages/core/commitment"
	"github.com/iotaledger/goshimmer/packages/protocol/models"
)

// Events is a container that acts as a dictionary for the events of the notarization manager.
type Events struct {
	EpochCommitted *event.Linkable[*EpochCommittedDetails]
	Error          *event.Linkable[error]

	event.LinkableCollection[Events, *Events]
}

// NewEvents contains the constructor of the Events object (it is generated by a generic factory).
var NewEvents = event.LinkableConstructor(func() (self *Events) {
	return &Events{
		EpochCommitted: event.NewLinkable[*EpochCommittedDetails](),
		Error:          event.NewLinkable[error](),
	}
})

// EpochMutationsEvents contains the events that are triggered when a mutation is applied to the epoch.
type EpochMutationsEvents struct {
	AcceptedBlockRemoved *event.Linkable[models.BlockID]

	event.LinkableCollection[EpochMutationsEvents, *EpochMutationsEvents]
}

// NewEpochMutationsEvents contains the constructor of the EpochMutationsEvents object (it is generated by a generic factory).
var NewEpochMutationsEvents = event.LinkableConstructor(func() (self *EpochMutationsEvents) {
	return &EpochMutationsEvents{
		AcceptedBlockRemoved: event.NewLinkable[models.BlockID](),
	}
})

// EpochCommittedDetails struct { contains the details of a committed epoch.
type EpochCommittedDetails struct {
	Commitment                *commitment.Commitment
	AcceptedBlocksCount       int
	AcceptedTransactionsCount int
	ActiveValidatorsCount     int
}