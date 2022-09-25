import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getOneTask } from '../../utils/taskAPI/taskAPI';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTask } from '../../redux/actions/taskDetailActions';
import { deleteOneTask } from '../../redux/actions/taskActions';
import { updateTask, deleteTask } from '../../utils/taskAPI/taskAPI';
import { ToastContainer, toast } from 'react-toastify';
const TaskDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const selectedTask = useSelector(state => state.selectedTask);
	console.log(selectedTask.docs);
	useEffect(() => {
		getOneTask(id)
			.then(response => {
				dispatch(setSelectedTask(response.data.task));
			})
			.catch(err => console.log(err));
	}, []);

	const updateStatus = status => {
		updateTask(id, status)
			.then(response => {
				console.log('updated', response);
				dispatch(setSelectedTask(response.data.updatedTask));
				if (response.data.success) {
					toast(response.data.message);
				}
			})
			.then(error => console.log(error));
	};

	const deleteAtask = id => {
		deleteTask(id)
			.then(response => {
				dispatch(deleteOneTask(id));
				if (response.data.success) {
					toast.info('Task Deleted Successfully');

					navigate('/home');
				}
			})
			.catch(error => {
				console.log(error);
				toast.error(error.data.message);
			});
	};

	return (
		<div>
			<ToastContainer />
			<div className={`card taskDetail ${selectedTask.status}`}>
				<h5>
					status :{selectedTask.status}
				</h5>
				<h5 className="card-title">
					{selectedTask.heading}
				</h5>
				<p className="card-text">
					{selectedTask.description}
				</p>
				<div>
					{selectedTask.docs
						? selectedTask.docs.map(value =>
								<img src={value.secure_url} key={value.id} />
							)
						: ''}
				</div>
				<div className="container">
					<Link to="/home" className="btn btn-primary">
						Go Back
					</Link>

					{selectedTask.status !== 'complete'
						? <div
								className="btn btn-success"
								onClick={() => updateStatus('complete')}>
								Complete
							</div>
						: ''}
					{selectedTask.status !== 'hold' && selectedTask.status !== 'complete'
						? <div
								className="btn btn-success"
								onClick={() => updateStatus('hold')}>
								Hold
							</div>
						: ''}
					<div
						className="btn btn-danger"
						onClick={() => deleteAtask(selectedTask._id)}>
						Delete
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskDetail;
