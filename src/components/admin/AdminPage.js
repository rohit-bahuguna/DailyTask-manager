import React, { useEffect, useState } from 'react';
import ShowTask from '../Todo/ShowTask';
import {
	adminGetAllTask,
	adminGetAllUser,
	adminGetTaskByStatus
} from '../../utils/userAPI/adminAPI';
import { adminUsers, adminTasks } from '../../redux/actions/adminActions';
import { useDispatch, useSelector } from 'react-redux';

const AdminPage = () => {
	const [statusType, setStatusType] = useState('all');
	const dispatch = useDispatch();
	const allUserData = useSelector(state => state.adminAllUsers.allUser);
	const allTasksData = useSelector(state => state.adminAllTasks.allTask);

	useEffect(
		() => {
			if (statusType === 'all') {
				adminGetAllTask()
					.then(response => {
						dispatch(adminTasks(response.data.task));
					})
					.catch(error => console.log(error));
			} else {
				adminGetTaskByStatus(statusType)
					.then(response => {
						dispatch(adminTasks(response.data.task));
					})
					.catch(error => console.log(error));
			}
		},
		[statusType]
	);

	useEffect(() => {
		adminGetAllUser()
			.then(response => {
				dispatch(adminUsers(response.data.users));
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div className="container">
			<div>
				All Users
				{/* <ol>
					
				</ol> */}
				<div className={`card showtask `}>
					<ol className="card-body">
						{allUserData &&
							allUserData.map((value, index) => {
								return (
									<li key={value._id}>
										{value.name}
									</li>
								);
							})}
					</ol>
				</div>
			</div>
			<div>
				<select name="user" id="" onChange={e => setStatusType(e.target.value)}>
					<option value="all">All Task</option>
					<option value="pending">Pending Task</option>
					<option value="complete">Completed Task</option>
					<option value="hold">On Hold</option>
				</select>
				<div className="container">
					{allTasksData &&
						allTasksData.map((value, index) => {
							return <ShowTask key={value._id} task={value} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
