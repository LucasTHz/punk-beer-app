import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import RouteNavBar from './src/routes/RouteNavBar';
import { TelaLogin } from './src/pages/Login';
import { theme } from './assets/themes/material';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
	return (
		<PaperProvider theme={theme.colors.light}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Login"
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Login" component={TelaLogin} />
					<Stack.Screen name="Favorito" component={RouteNavBar} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}
