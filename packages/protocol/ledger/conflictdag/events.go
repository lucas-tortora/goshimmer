package conflictdag

import (
	"github.com/iotaledger/hive.go/ds/advancedset"
	"github.com/iotaledger/hive.go/runtime/event"
)

// region Events ///////////////////////////////////////////////////////////////////////////////////////////////////////

// Events is a container that acts as a dictionary for the events of a ConflictDAG.
type Events[ConflictID, ConflictingResourceID comparable] struct {
	// ConflictCreated is an event that gets triggered whenever a new Conflict is created.
	ConflictCreated *event.Event1[*ConflictCreatedEvent[ConflictID, ConflictingResourceID]]

	// ConflictConflictsUpdated is an event that gets triggered whenever the ConflictIDs of a Conflict are updated.
	ConflictConflictsUpdated *event.Event1[*ConflictConflictsUpdatedEvent[ConflictID, ConflictingResourceID]]

	// ConflictParentsUpdated is an event that gets triggered whenever the parent ConflictIDs of a Conflict are updated.
	ConflictParentsUpdated *event.Event1[*ConflictParentsUpdatedEvent[ConflictID, ConflictingResourceID]]

	// ConflictAccepted is an event that gets triggered whenever a Conflict is confirmed.
	ConflictAccepted *event.Event1[ConflictID]

	// ConflictRejected is an event that gets triggered whenever a Conflict is rejected.
	ConflictRejected *event.Event1[ConflictID]

	event.Group[Events[ConflictID, ConflictingResourceID], *Events[ConflictID, ConflictingResourceID]]
}

// NewEvents contains the constructor of the Events object (it is generated by a generic factory).
func NewEvents[ConflictID, ConflictingResourceID comparable](optsLinkTarget ...*Events[ConflictID, ConflictingResourceID]) (events *Events[ConflictID, ConflictingResourceID]) {
	return event.CreateGroupConstructor(func() (self *Events[ConflictID, ConflictingResourceID]) {
		return &Events[ConflictID, ConflictingResourceID]{
			ConflictCreated:          event.New1[*ConflictCreatedEvent[ConflictID, ConflictingResourceID]](),
			ConflictConflictsUpdated: event.New1[*ConflictConflictsUpdatedEvent[ConflictID, ConflictingResourceID]](),
			ConflictParentsUpdated:   event.New1[*ConflictParentsUpdatedEvent[ConflictID, ConflictingResourceID]](),
			ConflictAccepted:         event.New1[ConflictID](),
			ConflictRejected:         event.New1[ConflictID](),
		}
	})(optsLinkTarget...)
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// region ConflictCreatedEvent /////////////////////////////////////////////////////////////////////////////////////////

// ConflictCreatedEvent is an event that gets triggered when a new Conflict was created.
type ConflictCreatedEvent[ConflictID, ConflictingResourceID comparable] struct {
	// ID contains the identifier of the newly created Conflict.
	ID ConflictID

	// ParentConflictIDs contains the identifiers of the parents of the newly created Conflict.
	ParentConflictIDs *advancedset.AdvancedSet[ConflictID]

	// ConflictingResourceIDs contains the identifiers of the conflicting resources that this Conflict is associated to.
	ConflictingResourceIDs *advancedset.AdvancedSet[ConflictingResourceID]
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// region ConflictConflictsUpdatedEvent //////////////////////////////////////////////////////////////////////////////////

// ConflictConflictsUpdatedEvent is a container that acts as a dictionary for the ConflictConflictsUpdated event related
// parameters.
type ConflictConflictsUpdatedEvent[ConflictID, ConflictingResourceID comparable] struct {
	// ConflictID contains the identifier of the updated Conflict.
	ConflictID ConflictID

	// NewConflictIDs contains the set of conflicts that this Conflict was added to.
	NewConflictIDs *advancedset.AdvancedSet[ConflictingResourceID]
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// region ConflictParentsUpdatedEvent ////////////////////////////////////////////////////////////////////////////////////

// ConflictParentsUpdatedEvent is a container that acts as a dictionary for the ConflictParentsUpdated event related
// parameters.
type ConflictParentsUpdatedEvent[ConflictID, ConflictingResourceID comparable] struct {
	// ConflictID contains the identifier of the updated Conflict.
	ConflictID ConflictID

	// AddedConflict contains the forked parent Conflict that replaces the removed parents.
	AddedConflict ConflictID

	// RemovedConflicts contains the parent ConflictIDs that were replaced by the newly forked Conflict.
	RemovedConflicts *advancedset.AdvancedSet[ConflictID]

	// ParentsConflictIDs contains the updated list of parent ConflictIDs.
	ParentsConflictIDs *advancedset.AdvancedSet[ConflictID]
}

// endregion ///////////////////////////////////////////////////////////////////////////////////////////////////////////
