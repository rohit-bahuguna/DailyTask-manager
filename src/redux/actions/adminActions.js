import { actionTypes } from '../constants/actionTypes';

export const adminUsers = allUsers => {
	return {
		type: actionTypes.ADMIN_ALL_USERS,
		payload: allUsers
	};
};

export const adminTasks = allTasks => {
	return {
		type: actionTypes.ADMIN_ALL_TASKS,
		payload: allTasks
	};
};
