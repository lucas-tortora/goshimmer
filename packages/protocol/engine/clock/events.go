package clock

import (
	"time"

	"github.com/iotaledger/hive.go/runtime/event"
)

// Events is a collection of events that can be triggered by the Clock.
type Events struct {
	// AcceptanceTimeUpdated is an Event for callbacks of the type func(newTime, now time.Time).
	AcceptanceTimeUpdated *event.Event1[time.Time]

	// AcceptanceTimeUpdated is triggered when a Acceptance Tangle Time advances.
	ConfirmedTimeUpdated *event.Event1[time.Time]

	// LinkableCollection is a generic trait that allows to link multiple collections of events together.
	event.Group[Events, *Events]
}

// NewEvents contains the constructor of the Events object (it is generated by a generic factory).
var NewEvents = event.CreateGroupConstructor(func() (newEvents *Events) {
	return &Events{
		ConfirmedTimeUpdated:  event.New1[time.Time](),
		AcceptanceTimeUpdated: event.New1[time.Time](),
	}
})
