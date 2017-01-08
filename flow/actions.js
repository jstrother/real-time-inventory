// flow/actions.js
// imported into ./reducers.js

// change exports to be inventory and user

export const newItem = item => {
	return {
		type: 'inventory:item:insert',
		item
	};
};

export const updateItem = item => {
	return {
		type: 'inventory:item:update',
		item
	};
};

export const deleteItem = item => {
	return {
		type: 'inventory:item:delete',
		item
	};
};

export const newUser = user => {
	return {
		type: 'inventory:user:insert',
		user
	};
};

export const updateUser = user => {
	return {
		type: 'inventory:user:update',
		user
	};
};

export const deleteUser = user => {
	return {
		type: 'inventory:user:delete',
		user
	};
};