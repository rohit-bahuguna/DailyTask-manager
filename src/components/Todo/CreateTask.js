import React, { useState } from 'react';
import { createTask } from '../../utils/taskAPI/taskAPI';
import { useDispatch, useSelector } from 'react-redux';
import { createATask } from '../../redux/actions/taskActions';
import { toast, ToastContainer } from 'react-toastify';

const CreateTask = () => {
	const dispatch = useDispatch();
	let initialValues = {
		heading: '',
		description: '',
		docs: []
	};
	const [newTask, setNewTask] = useState(initialValues);

	const createNewTask = () => {
		createTask(newTask)
			.then(response => {
				dispatch(createATask(response.data.task));
				toast.success('Task Created Successfully');
			})
			.catch(error => console.log(error));
	};

	return (
		<div className="card   sticky" style={{ width: '18rem', height: '30rem' }}>
			<ToastContainer />
			<div className="card-body createTask">
				<textarea
					placeholder="Enter Heading Here"
					value={newTask.heading}
					onChange={e => setNewTask({ ...newTask, heading: e.target.value })}
					required
					rows="3"
					cols="3"
				/>
				<textarea
					placeholder="Enter Description Here"
					value={newTask.description}
					onChange={e =>
						setNewTask({ ...newTask, description: e.target.value })}
					required
					rows="8"
					cols="8"
				/>

				<input
					type="file"
					placeholder="Choose File"
					multiple
					onChange={e => setNewTask({ ...newTask, docs: [...e.target.files] })}
					accept="image/png, image/jpeg"
				/>
				<input
					type="button"
					className="btn btn-primary"
					value="Add Task"
					on
					onClick={createNewTask}
				/>
			</div>
		</div>
	);
};

export default CreateTask;

// rror: Actions must be plain objects.Instead, the actual type was: 'undefined'.You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.
//     at dispatch(redux.js: 275: 1)
//     at CreateTa
