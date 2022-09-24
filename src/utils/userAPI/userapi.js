import axios from 'axios';
let baseUrl = process.env.REACT_APP_API_URL;

// name email , password
export const signIn = async user => {
	const url = `${baseUrl}/signup`;
	const response = await axios.post(url, user, {
		withCredentials: true
	});
	return response;
};

//email , password
export const logIn = async user => {
	const url = `${baseUrl}/login`;
	const response = await axios.post(url, user, { withCredentials: true });
	return response;
};

export const logOut = async () => {
	const url = `${baseUrl}/logout`;
	const response = await axios.get(url, { withCredentials: true });
	return response;
};
