import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {createBrowserHistory} from 'history';
import 'chartjs-plugin-streaming';
import {App} from 'app/App';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import {Router} from 'react-router-dom';
import NodeStore from "app/stores/NodeStore";
import ExplorerStore from "app/stores/ExplorerStore";
import DrngStore from "app/stores/DrngStore";
import FaucetStore from "app/stores/FaucetStore";
import VisualizerStore from "app/stores/VisualizerStore";
import ManaStore from "app/stores/ManaStore";
import {EpochStore} from "app/stores/EpochStore";
import ChatStore from "app/stores/ChatStore";

// prepare MobX stores
const routerStore = new RouterStore();
const nodeStore = new NodeStore();
const explorerStore = new ExplorerStore(routerStore);
const drngStore = new DrngStore(routerStore);
const chatStore = new ChatStore(routerStore, nodeStore);
const faucetStore = new FaucetStore(routerStore);
const visualizerStore = new VisualizerStore(routerStore);
const manaStore = new ManaStore();
const epochStore = new EpochStore();
const stores = {
    "routerStore": routerStore,
    "nodeStore": nodeStore,
    "explorerStore": explorerStore,
    "drngStore": drngStore,
    "chatStore": chatStore,
    "faucetStore": faucetStore,
    "visualizerStore": visualizerStore,
    "manaStore": manaStore,
    "epochStore": epochStore
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

// render react DOM
ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <App history={history}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
