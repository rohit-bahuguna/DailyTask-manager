import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';
import { selectedTaskReducer } from './selectedTaskReducer';
import { changeModeReducer } from './changeModeReducer';
import { loginReducer, signupReducer } from './loginReducer';

const reducers = combineReducers({
	allTasks: taskReducer,
	selectedTask: selectedTaskReducer,
	login: loginReducer,
	signup: signupReducer,
	mode: changeModeReducer
});

export default reducers;
