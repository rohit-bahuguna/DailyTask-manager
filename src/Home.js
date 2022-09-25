import React from 'react';

import './css/home.css';

import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import CreateTask from './components/Todo/CreateTask';
import ShowTask from './components/Todo/ShowTask';
import MenuBar from './components/MenuBar';

const Home = () => {
	const allTasks = useSelector(state => state.allTasks.tasks);

	return (
		<div className="main">
			<MenuBar />
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
		</div>
	);
};

export default Home;
