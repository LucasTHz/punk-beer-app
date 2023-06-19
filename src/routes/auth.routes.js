import React from 'react';
import { TelaLogin } from '../pages/Login';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen name="Login" options={{ headerShown: false }} component={TelaLogin} />
	</AuthStack.Navigator>
);
export default AuthRoutes;
