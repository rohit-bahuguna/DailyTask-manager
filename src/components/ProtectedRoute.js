import React from 'react';
import { Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
const ProtectedRoute = ({ children }) => {
	const loginData = useSelector(state => state.login);

	if (!loginData.status) {
		return <Navigate to="/" />;
	}
	return children;
};

export default ProtectedRoute;
