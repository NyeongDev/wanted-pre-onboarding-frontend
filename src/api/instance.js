import axios from 'axios';

export const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.request.use(config => {
	const accessToken = localStorage.getItem('accessToken');
	if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
	return config;
});

instance.interceptors.response.use(
	response => {
		return response;
	},
	function (error) {
		return error.response.status;
	}
);
