import api from './api';

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

export const getPerfil = async (userId) => {
	try {
		return ({ data } = await api.get('/usuario/show/' + userId));
	} catch (error) {
		console.error('An error occurred during getPerfil:', error.message);
		// Handle specific error cases if necessary
	}
};

export const updateUser = async (userId, data) => {
	try {
		const { data } = await api.put('/usuario/update/' + userId, data);
		await AsyncStorage.setItem('@PunkBeer:user', JSON.stringify(data[0]));
		console.log(data);
	} catch (error) {
		console.error('An error occurred during updateUser:', error.message);
		// Handle specific error cases if necessary
	}
};
