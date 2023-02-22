package markermanager

import (
	"github.com/iotaledger/goshimmer/packages/protocol/engine/tangle/booker/markers"
	"github.com/iotaledger/hive.go/runtime/event"
)

type Events struct {
	SequenceEvicted *event.Event1[markers.SequenceID]

	event.Group[Events, *Events]
}

// NewEvents contains the constructor of the Events object (it is generated by a generic factory).
var NewEvents = event.CreateGroupConstructor(func() (newEvents *Events) {
	return &Events{
		SequenceEvicted: event.New1[markers.SequenceID](),
	}
})
