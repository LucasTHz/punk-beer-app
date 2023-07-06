import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [userId, setUserId] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadStorageData() {
			const storagedUser = await AsyncStorage.getItem('@PunkBeer:user');
			const storagedToken = await AsyncStorage.getItem('@PunkBeer:token');

			if (storagedUser && storagedToken) {
				api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
				setUser(JSON.parse(storagedUser));
				setLoading(false);
			}
		}
		loadStorageData();
	}, []);

	const setHandleUserId = (id) => {
		setUserId(id);
	};

	async function signIn(email, password) {
		const token = await auth.signIn(email, password);

		if (token.error) {
			setLoading(false);
			return token.error;
		}

		api.defaults.headers.Authorization = `Bearer ${token}`;
		const decodedToken = jwt_decode(token);
		setHandleUserId(decodedToken.id);
		await getUser(decodedToken.id);
		await AsyncStorage.setItem('@PunkBeer:token', token);
		await AsyncStorage.setItem('@PunkBeer:userId', userId);
	}

	async function signOut() {
		await AsyncStorage.clear().then(() => setUser(null));
	}

	async function updateUser(info) {
		const response = await auth.updateUser(userId, info);
		return response;
	}

	async function getUser() {
		const { data } = await auth.getPerfil(userId);
		setUser(data[0]);
		await AsyncStorage.setItem('@PunkBeer:user', JSON.stringify(data[0]));
	}

	async function getMyList() {
		const data = await auth.getMyList(userId);
		return data;
	}

	async function deleteItemMyList(id) {
		const data = await auth.deleteItemMyList(id);
		return data;
	}

	async function createItemMyList(item) {
		const data = await auth.createItemMyList(item);
		return data;
	}

	return (
		<AuthContext.Provider
			value={{
				signed: !!user,
				user,
				signIn,
				signOut,
				loading,
				updateUser,
				getUser,
				getMyList,
				deleteItemMyList,
				createItemMyList,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
