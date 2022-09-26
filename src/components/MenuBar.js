import React, { useState, useEffect } from 'react';
import Search from './Search';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTask, getTaskByStatus } from '../utils/taskAPI/taskAPI';
import { setTask } from '../redux/actions/taskActions';

const MenuBar = () => {
	const [searchNote, setSearchNote] = useState('');

	const [status, setStatus] = useState('all');
	const allTasks = useSelector(state => state.allTasks.tasks);
	const loginData = useSelector(state => state.login);
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (status === 'all') {
				getAllTask()
					.then(response => {
						dispatch(setTask(response.data.tasks));
					})
					.catch(error => console.log(error));
			} else {
				getTaskByStatus(status)
					.then(response => dispatch(setTask(response.data.task)))
					.catch(error => console.log(error));
			}
		},
		[status]
	);
	const SearchNote = searchBy => {};

	return (
		<div>
			<div className="menubar_container ">
				<Search handleSearch={setSearchNote} />

				<select name="task" id="" on onChange={e => setStatus(e.target.value)}>
					<option disabled selected>
						filter
					</option>
					<option value="all">All Tasks</option>
					<option value="pending">Pending Task</option>
					<option value="complete">Completed Task</option>
					<option value="hold">Hold Task</option>
				</select>
			</div>
		</div>
	);
};

export default MenuBar;
