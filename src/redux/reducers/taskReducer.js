import { actionTypes } from '../constants/actionTypes';

const initialState = {
	tasks: []
};

export const taskReducer = (state = initialState, action) => {
	const { type, payload } = action;
	console.log(payload);
	switch (type) {
		case actionTypes.SET_TASK:
			return { ...state, tasks: payload };
		case actionTypes.CREATE_TASK:
			let tasks = state.tasks;
			return { tasks: [...tasks, payload] };

		case actionTypes.DELETE_TASK:
			let items = state.tasks;

			let newItem = items.filter((value, index) => {
				return value._id !== payload;
			});

			return { tasks: [...newItem] };

		default:
			return state;
	}
};
