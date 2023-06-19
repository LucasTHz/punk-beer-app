import React from 'react';
import Favorito from '../pages/Favorito';
import { createStackNavigator } from '@react-navigation/stack';
import RouteNavBar from '../routes/RouteNavBar';

const AppStack = createStackNavigator();

const AppRoutes = () => (
	<AppStack.Navigator>
		<AppStack.Screen options={{ headerShown: false }} name="Favorito" component={RouteNavBar} />
	</AppStack.Navigator>
);
export default AppRoutes;
