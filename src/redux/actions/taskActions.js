import { actionTypes } from '../constants/actionTypes';

export const setTask = response => {
	return {
		type: actionTypes.SET_TASK,
		payload: response
	};
};

export const deleteOneTask = id => {
	return {
		type: actionTypes.DELETE_TASK,
		payload: id
	};
};

export const createATask = task => {
	return {
		type: actionTypes.CREATE_TASK,
		payload: task
	};
};
