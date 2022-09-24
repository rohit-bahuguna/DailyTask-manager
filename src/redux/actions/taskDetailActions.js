import { actionTypes } from '../constants/actionTypes';

export const setSelectedTask = task => {
	return {
		type: actionTypes.SET_SELECTED_TASK,
		payload: task
	};
};
