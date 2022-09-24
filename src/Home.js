import React, { useState, useEffect } from 'react';
import { setTask } from './redux/actions/taskActions';
import './css/home.css';

import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import CreateTask from './components/Todo/CreateTask';
import ShowTask from './components/Todo/ShowTask';

import { getAllTask } from './utils/taskAPI/taskAPI';

const Home = () => {
	const allTasks = useSelector(state => state.allTasks.tasks);
	const loginData = useSelector(state => state.login);
	const dispatch = useDispatch();
	useEffect(() => {
		getAllTask()
			.then(response => {
				// console.log(response.data.tasks)
				dispatch(setTask(response.data.tasks));
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="outer_container">
			<ToastContainer />
			<CreateTask />
			<div className="line" />
			{allTasks.length !== 0
				? <div className="container">
						{allTasks &&
							allTasks.map((value, index) => {
								return <ShowTask key={value._id} task={value} />;
							})}
					</div>
				: <img className="todoImg" src="/images/Liste.svg" alt="image" />}
		</div>
	);
};

export default Home;
