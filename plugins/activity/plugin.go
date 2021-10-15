package activity

import (
	"math/rand"
	"time"

	"github.com/iotaledger/hive.go/daemon"
	"github.com/iotaledger/hive.go/node"
	"github.com/iotaledger/hive.go/timeutil"
	"go.uber.org/dig"

	"github.com/iotaledger/goshimmer/packages/shutdown"
	"github.com/iotaledger/goshimmer/packages/tangle"
	"github.com/iotaledger/goshimmer/packages/tangle/payload"
)

var (
	// Plugin is the plugin instance of the activity plugin.
	Plugin *node.Plugin
	deps   = new(dependencies)
)

type dependencies struct {
	dig.In
	Tangle *tangle.Tangle
}

func init() {
	Plugin = node.NewPlugin("Activity", deps, node.Disabled, configure, run)
}

// configure events
func configure(plugin *node.Plugin) {
	plugin.LogInfof("starting node with activity plugin")
}

// broadcastActivityMessage broadcasts a sync beacon via communication layer.
func broadcastActivityMessage() {
	activityPayload := payload.NewGenericDataPayload([]byte("activity"))
	msg, err := deps.Tangle.IssuePayload(activityPayload, deps.Tangle.Options.Identity, Parameters.ParentsCount)
	if err != nil {
		Plugin.LogWarnf("error issuing activity message: %s", err)
		return
	}

	Plugin.LogDebugf("issued activity message %s", msg.ID())
}

func run(_ *node.Plugin) {
	if err := daemon.BackgroundWorker("Activity-plugin", func(shutdownSignal <-chan struct{}) {
		// start with initial delay
		rand.NewSource(time.Now().UnixNano())
		initialDelay := time.Duration(rand.Intn(int(Parameters.DelayOffset)))
		time.Sleep(initialDelay)

		if Parameters.BroadcastInterval > 0 {
			timeutil.NewTicker(broadcastActivityMessage, Parameters.BroadcastInterval, shutdownSignal)
		}

		// Wait before terminating so we get correct log messages from the daemon regarding the shutdown order.
		<-shutdownSignal
	}, shutdown.PriorityActivity); err != nil {
		Plugin.Panicf("Failed to start as daemon: %s", err)
	}
}
