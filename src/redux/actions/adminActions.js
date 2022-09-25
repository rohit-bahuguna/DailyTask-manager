import { actionTypes } from '../constants/actionTypes';

export const adminUsers = allUsers => {
	console.log(allUsers);
	return {
		type: actionTypes.ADMIN_ALL_USERS,
		payload: allUsers
	};
};

export const adminTasks = allTasks => {
	console.log(allTasks);
	return {
		type: actionTypes.ADMIN_ALL_TASKS,
		payload: allTasks
	};
};
