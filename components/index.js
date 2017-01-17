// components/index.js
// top-level react component

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app.js';
import store from '../flow/store.js';
import InventorySocketListener from '../socket-listeners/inventory-listener.js';
import UserSocketListener from '../socket-listeners/user-listener.js';

InventorySocketListener(store);
UserSocketListener(store);
injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={ getMuiTheme() }>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('app')
);