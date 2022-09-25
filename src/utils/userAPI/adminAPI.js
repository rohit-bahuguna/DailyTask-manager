import axios from 'axios';
let baseUrl = process.env.REACT_APP_API_URL;

// name email , password
export const adminGetAllTask = async () => {
	const url = `${baseUrl}/admingetalltask`;
	const response = await axios.get(url, {
		withCredentials: true
	});
	return response;
};

export const adminGetAllUser = async () => {
	const url = `${baseUrl}/admin/users`;
	const response = await axios.get(url, {
		withCredentials: true
	});
	return response;
};

export const adminGetTaskByStatus = async status => {
	const url = `${baseUrl}/admin/gettaskbystatus/${status}`;
	const response = await axios.get(url, {
		withCredentials: true
	});
	return response;
};
