import api from './api';

export const signIn = async (email, password) => {
	try {
		const { data } = await api.post('/usuario/login', {
			email: email,
			senha: password,
		});
		return data.token;
	} catch (error) {
		return error.response.data;
		// Handle specific error cases if necessary
	}
};

export const getPerfil = async (userId) => {
	try {
		return ({ data } = await api.get('/usuario/show/' + userId));
	} catch (error) {
		return error.response.data;
	}
};

export const updateUser = async (userId, info) => {
	try {
		const { data } = await api.put('/usuario/update/' + userId, info);

		return data.message;
	} catch (error) {
		return error.response.data;
	}
};
