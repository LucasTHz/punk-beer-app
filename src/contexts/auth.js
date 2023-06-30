import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
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

	async function signIn(email, password) {
		const token = await auth.signIn(email, password);
		api.defaults.headers.Authorization = `Bearer ${token}`;
		const response = await auth.getPerfil(token);

		setUser(response.data[0]);
		await AsyncStorage.setItem('@PunkBeer:user', JSON.stringify(response.data[0]));
		await AsyncStorage.setItem('@PunkBeer:token', token);
	}

	async function signOut() {
		await AsyncStorage.clear().then(() => setUser(null));
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>{children}</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
