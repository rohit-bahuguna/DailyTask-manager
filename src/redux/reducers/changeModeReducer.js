import { actionTypes } from '../constants/actionTypes';

export const changeModeReducer = (state = { mode: false }, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.MODE:
			return {
				mode: payload
			};

		default:
			return state;
	}
};
