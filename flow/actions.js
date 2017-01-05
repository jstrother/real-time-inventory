// flow/actions.js
// imported into ./reducers.js

// change exports to be inventory and user

export const newTask = task => {
	return {
		type: 'task:insert',
		task: task
	};
};

export const updateTask = task => {
	return {
		type: 'task:update',
		task: task
	};
};

export const deleteTask = task => {
	return {
		type: 'task:delete',
		task: task
	};
};