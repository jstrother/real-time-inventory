// components/index.jsx
// top-level react component

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../flow/store.js';
import App from './app.jsx';
import InventorySocketListeners from '../socket-listeners/inventory-listener.js';
// import UserSocketListeners from '../socket-listeners/user-listener.js';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

InventorySocketListeners(store);
// UserSocketListeners(store);

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('app')
);