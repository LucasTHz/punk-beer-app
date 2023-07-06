import React from 'react';
import Favorito from '../pages/Favorito';
import { createStackNavigator } from '@react-navigation/stack';
import RouteNavBar from '../routes/RouteNavBar';
import ShowItem from '../pages/MinhaLista/ShowItem';
import CreateItem from '../pages/MinhaLista/CreateItem';

const AppStack = createStackNavigator();

const AppRoutes = () => (
	<AppStack.Navigator>
		<AppStack.Screen options={{ headerShown: false }} name="Favorito" component={RouteNavBar} />
		<AppStack.Screen name="Show Item" component={ShowItem} />
		<AppStack.Screen name="Criação do item" component={CreateItem} />
	</AppStack.Navigator>
);
export default AppRoutes;
