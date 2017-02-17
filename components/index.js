// components/index.js
// top-level react component

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app.js';
import store from '../flow/store.js';
import { ItemSocketListener, UserSocketListener } from '../socket-listeners.js';

ItemSocketListener(store);
UserSocketListener(store); //once users gets set up and running, i want to see if i can finally access two different db's
injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
