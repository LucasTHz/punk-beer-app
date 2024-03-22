import React from 'react';
import { TelaLogin } from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroEmailSenha from '../pages/Cadastro/CadastroEmailSenha';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen name="Login" options={{ headerShown: false }} component={TelaLogin} />
		<AuthStack.Screen name="TelaRegistrar" options={{ headerShown: false }} component={Cadastro} />
		<AuthStack.Screen name="TelaRegistrar2" options={{ headerShown: false }} component={CadastroEmailSenha} />
	</AuthStack.Navigator>
);
export default AuthRoutes;
