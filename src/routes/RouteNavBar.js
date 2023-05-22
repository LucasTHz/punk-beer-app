import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pages/Home';
import Historico from '../pages/Historico';
import MinhaLista from '../pages/Lista';
import MeuPerfil from '../pages/Perfil';

const Tab = createBottomTabNavigator();

export default function RouteNavBar() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={({ navigation, state, descriptors, insets }) => (
				<BottomNavigation.Bar
					navigationState={state}
					safeAreaInsets={insets}
					onTabPress={({ route, preventDefault }) => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (event.defaultPrevented) {
							preventDefault();
						} else {
							navigation.navigate(route.name, route.params);
						}
					}}
					renderIcon={({ route, focused, color }) => {
						const { options } = descriptors[route.key];
						if (options.tabBarIcon) {
							return options.tabBarIcon({ focused, color, size: 24 });
						}

						return null;
					}}
					getLabelText={({ route }) => {
						const { options } = descriptors[route.key];
						const label =
							options.tabBarLabel !== undefined
								? options.tabBarLabel
								: options.title !== undefined
								? options.title
								: route.title;

						return label;
					}}
				/>
			)}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: 'Favorito',
					tabBarIcon: ({ color, size }) => {
						return <Icon name="heart-outline" size={size} color={color} />;
					},
				}}
			/>
			<Tab.Screen
				name="Historico"
				component={Historico}
				options={{
					tabBarLabel: 'Historico',
					tabBarIcon: ({ color, size }) => {
						return <Icon name="history" size={size} color={color} />;
					},
				}}
			/>
			{
				<Tab.Screen
					name="Minha Lista"
					component={MinhaLista}
					options={{
						tabBarLabel: 'Minha Lista',
						tabBarIcon: ({ color, size }) => {
							return <Icon name="book-multiple-outline" size={size} color={color} />;
						},
					}}
				/>
			}
			{
				<Tab.Screen
					name="Perfil"
					component={MeuPerfil}
					options={{
						tabBarLabel: 'Meu perfil',
						tabBarIcon: ({ color, size }) => {
							return <Icon name="account-outline" size={size} color={color} />;
						},
					}}
				/>
			}
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
