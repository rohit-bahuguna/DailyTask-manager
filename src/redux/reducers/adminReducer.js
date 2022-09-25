import { actionTypes } from '../constants/actionTypes';

const initialTaskState = {
	allTask: []
};

export const AdminAllTasksReducer = (state = initialTaskState, action) => {
	const { type, payload } = action;
	console.log(payload, 'payload', type);
	switch (type) {
		case actionTypes.ADMIN_ALL_TASKS:
			return { ...state, allTask: payload };

		// case actionTypes.DELETE_TASK:
		// 	let items = state.tasks;

		// 	let newItem = items.filter((value, index) => {
		// 		return value._id !== payload;
		// 	});

		// 	return { tasks: [...newItem] };

		default:
			return state;
	}
};

const initialUserState = {
	allUser: []
};

export const AdminAllUsersReducer = (state = initialUserState, action) => {
	const { type, payload } = action;
	console.log(payload, 'payload', type, 'type');
	switch (type) {
		case actionTypes.ADMIN_ALL_USERS:
			return { ...state, allUser: payload };

		// case actionTypes.DELETE_TASK:
		// 	let items = state.users;

		// 	let newItem = items.filter((value, index) => {
		// 		return value._id !== payload;
		// 	});

		// 	return { users: [...newItem] };

		default:
			return state;
	}
};
