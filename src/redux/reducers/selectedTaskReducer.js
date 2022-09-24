import { actionTypes } from '../constants/actionTypes';

export const selectedTaskReducer = (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.SET_SELECTED_TASK:
			return { ...state, ...payload };
		default:
			return state;
	}
};
