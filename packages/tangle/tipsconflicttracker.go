package tangle

import (
	"sync"

	"github.com/cockroachdb/errors"
	"github.com/iotaledger/hive.go/generics/event"
	"github.com/iotaledger/hive.go/generics/set"

	"github.com/iotaledger/goshimmer/packages/conflictdag"
	"github.com/iotaledger/goshimmer/packages/ledger/utxo"
)

type TipsConflictTracker struct {
	missingConflicts  utxo.TransactionIDs
	tipsConflictCount map[utxo.TransactionID]int
	tangle            *Tangle

	sync.RWMutex
}

func NewTipsConflictTracker(tangle *Tangle) *TipsConflictTracker {
	return &TipsConflictTracker{
		missingConflicts:  set.NewAdvancedSet[utxo.TransactionID](),
		tipsConflictCount: make(map[utxo.TransactionID]int),
		tangle:            tangle,
	}
}

func (c *TipsConflictTracker) Setup() {
	c.tangle.Ledger.ConflictDAG.Events.BranchConfirmed.Attach(event.NewClosure(func(event *conflictdag.BranchConfirmedEvent[utxo.TransactionID]) {
		c.deleteConflict(event.BranchID)
	}))
	c.tangle.Ledger.ConflictDAG.Events.BranchRejected.Attach(event.NewClosure(func(event *conflictdag.BranchRejectedEvent[utxo.TransactionID]) {
		c.deleteConflict(event.BranchID)
	}))
}

func (c *TipsConflictTracker) AddTip(messageID MessageID) {
	messageConflictIDs, err := c.tangle.Booker.MessageBranchIDs(messageID)
	if err != nil {
		panic(err)
	}

	c.Lock()
	defer c.Unlock()

	for it := messageConflictIDs.Iterator(); it.HasNext(); {
		conflictID := it.Next()

		if c.tangle.Ledger.ConflictDAG.InclusionState(set.NewAdvancedSet(conflictID)) != conflictdag.Pending {
			continue
		}

		if c.tipsConflictCount[conflictID]++; c.tipsConflictCount[conflictID] == 1 {
			c.missingConflicts.Delete(conflictID)
		}
	}
}

func (c *TipsConflictTracker) RemoveTip(messageID MessageID) {
	messageBranchIDs, err := c.tangle.Booker.MessageBranchIDs(messageID)
	if err != nil {
		panic("could not determine BranchIDs of tip.")
	}

	c.Lock()
	defer c.Unlock()

	for it := messageBranchIDs.Iterator(); it.HasNext(); {
		conflictID := it.Next()

		if _, exists := c.tipsConflictCount[conflictID]; !exists {
			continue
		}

		if c.tangle.Ledger.ConflictDAG.InclusionState(set.NewAdvancedSet(conflictID)) != conflictdag.Pending {
			continue
		}

		if c.tipsConflictCount[conflictID]--; c.tipsConflictCount[conflictID] == 0 {
			c.missingConflicts.Add(conflictID)
			delete(c.tipsConflictCount, conflictID)
		}
	}
}

func (c *TipsConflictTracker) MissingConflicts(amount int) (missingConflicts utxo.TransactionIDs) {
	c.Lock()
	defer c.Unlock()

	missingConflicts = utxo.NewTransactionIDs()
	_ = c.missingConflicts.ForEach(func(conflictID utxo.TransactionID) (err error) {
		// TODO: this should not be necessary if BranchConfirmed/BranchRejected events are fired appropriately
		if c.tangle.Ledger.ConflictDAG.InclusionState(set.NewAdvancedSet(conflictID)) != conflictdag.Pending {
			c.missingConflicts.Delete(conflictID)
			delete(c.tipsConflictCount, conflictID)
			return
		}
		if !c.tangle.OTVConsensusManager.BranchLiked(conflictID) {
			return
		}

		if missingConflicts.Add(conflictID) && missingConflicts.Size() == amount {
			return errors.Errorf("amount of missing conflicts reached %d", amount)
		}

		return nil
	})

	return missingConflicts
}

func (c *TipsConflictTracker) deleteConflict(id utxo.TransactionID) {
	c.Lock()
	defer c.Unlock()

	c.missingConflicts.Delete(id)
	delete(c.tipsConflictCount, id)
}