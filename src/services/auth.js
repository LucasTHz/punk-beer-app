import api from './api';
import jwt_decode from 'jwt-decode';

export const signIn = async (email, password) => {
	try {
		const response = await api.post('/usuario/login', {
			email: email,
			senha: password,
		});
		return response.headers['x-access-token'];
	} catch (error) {
		console.error('An error occurred during sign-in:', error);
		// Handle specific error cases if necessary
	}
};

export const getPerfil = async (token) => {
	try {
		const decodedToken = jwt_decode(token);
		const userId = decodedToken.id;
		return ({ data } = await api.get('/usuario/show/' + userId));
	} catch (error) {
		console.error('An error occurred during getPerfil:', error.message);
		// Handle specific error cases if necessary
	}
};
