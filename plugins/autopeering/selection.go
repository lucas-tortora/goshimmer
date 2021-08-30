package autopeering

import (
	"sync"

	"github.com/iotaledger/hive.go/autopeering/peer"
	"github.com/iotaledger/hive.go/autopeering/peer/service"
	"github.com/iotaledger/hive.go/autopeering/selection"
	"github.com/iotaledger/hive.go/identity"
	"github.com/iotaledger/hive.go/logger"

	"github.com/iotaledger/goshimmer/plugins/autopeering/discovery"
	"github.com/iotaledger/goshimmer/plugins/autopeering/local"
	"github.com/iotaledger/goshimmer/plugins/messagelayer"
)

var (
	// Conn contains the network connection.
	Conn *NetConnMetric
)

var (
	// the peer selection protocol
	peerSel     *selection.Protocol
	peerSelOnce sync.Once
)

// Selection returns the neighbor selection instance.
func Selection() *selection.Protocol {
	peerSelOnce.Do(createPeerSel)
	return peerSel
}

func createPeerSel() {
	// assure that the logger is available
	log := logger.NewLogger(PluginName).Named("sel")

	peerSel = selection.New(local.GetInstance(), discovery.Discovery(),
		selection.Logger(log),
		selection.NeighborValidator(selection.ValidatorFunc(isValidNeighbor)),
		selection.UseMana(Parameters.Mana),
		selection.ManaFunc(evalMana),
		selection.R(Parameters.R),
		selection.Ro(Parameters.Ro),
	)
}

// isValidNeighbor checks whether a peer is a valid neighbor.
func isValidNeighbor(p *peer.Peer) bool {
	// gossip must be supported
	gossipService := p.Services().Get(service.GossipKey)
	if gossipService == nil {
		return false
	}
	// gossip service must be valid
	if gossipService.Network() != "tcp" || gossipService.Port() < 0 || gossipService.Port() > 65535 {
		return false
	}
	return true
}

func evalMana(nodeIdentity *identity.Identity) uint64 {
	if !manaEnabled {
		return 0
	}
	m, _, err := messagelayer.GetConsensusMana(nodeIdentity.ID())
	if err != nil {
		return 0
	}
	return uint64(m)
}