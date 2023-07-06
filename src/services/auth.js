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
export const getMyList = async () => {
	try {
		const { data } = await api.get('/usuario/minha-lista/index');
		return data;
	} catch (error) {
		return error.response.data;
	}
};

export const deleteItemMyList = async (id) => {
	try {
		const { data } = await api.delete('/usuario/minha-lista/delete/' + id);

		return data;
	} catch (error) {
		return error.response.data;
	}
};

export const createItemMyList = async (item) => {
	try {
		const { data } = await api.post('/usuario/minha-lista/store', item);

		return data;
	} catch (error) {
		return error.response.data;
	}
};

export const getMyFavorite = async (userId) => {
	try {
		const { data } = await api.get('/usuario/favorito/index');
		return data;
	} catch (error) {
		return error.response.data;
	}
};

export const createUser = async (info) => {
	try {
		const { data } = await api.post('/usuario/store', info);

		return data;
	} catch (error) {
		return error.response.data;
	}
};
