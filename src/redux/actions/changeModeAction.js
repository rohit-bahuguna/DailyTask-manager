import { actionTypes } from '../constants/actionTypes';

export const changeMode = mode => {
	return {
		type: actionTypes.MODE,
		payload: mode
	};
};
