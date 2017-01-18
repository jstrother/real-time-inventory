// flow/reducers.js
// imported into ./state.js

import { combineReducers } from 'redux';
import inventoryReducer from './subReducers/inventory-reducer.js'

const reducers = combineReducers({
	inventoryReducer
});

export default reducers;