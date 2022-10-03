import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SignIn from './components/user/Signup';
import LogIn from './components/user/Login';
import Home from './Home';
import './css/responsive.css';
import './css/home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './components/ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/user/Header';
import TaskDetail from './components/Todo/TaskDetail';
import AdminPage from './components/admin/AdminPage';

const App = () => {
	const Mode = useSelector(state => state.mode);

	return (
		<div className={`${Mode.mode && 'dark-mode'}`}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/taskdetail/:id"
						element={
							<ProtectedRoute>
								<TaskDetail />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/adminpage"
						element={
							<ProtectedRoute>
								<AdminPage />
							</ProtectedRoute>
						}
					/>
					<Route path="/" element={<LogIn />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signin" element={<SignIn />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
