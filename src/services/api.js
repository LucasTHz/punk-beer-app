import axios from 'axios';

const api = axios.create({
	baseURL: 'https://punk-beer-api.glitch.me/api',
	headers: {
		'Content-Type': 'application/json',
		Accept: '*/*',
	},
});

export default api;
