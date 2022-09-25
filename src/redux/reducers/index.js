import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';
import { selectedTaskReducer } from './selectedTaskReducer';
import { changeModeReducer } from './changeModeReducer';
import { loginReducer, signupReducer } from './loginReducer';
import { AdminAllTasksReducer, AdminAllUsersReducer } from './adminReducer';

const reducers = combineReducers({
	allTasks: taskReducer,
	selectedTask: selectedTaskReducer,
	login: loginReducer,
	signup: signupReducer,
	mode: changeModeReducer,
	adminAllUsers: AdminAllUsersReducer,
	adminAllTasks: AdminAllTasksReducer
});

export default reducers;
