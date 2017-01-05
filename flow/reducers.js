// flow/reducers.js
// imported into ./state.js

import { combineReducers } from 'redux';
import inventoryReducer from './subReducers/inventory-reducer.js';
import userReducer from './subReducers/user-reducer.js';

const reducers = combineReducers({
	inventoryReducer,
	userReducer
});

export default reducers;