import {
	DefaultTheme,
	MD3DarkTheme,
	MD3LightTheme,
	Provider as PaperProvider,
	adaptNavigationTheme,
} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import RouteNavBar from './src/routes/RouteNavBar';
import { TelaLogin } from './src/pages/Login';
import { LightScheme } from './assets/themes/LightScheme';
import { DarkScheme } from './assets/themes/DarkScheme';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';

const LightTheme = {
	...MD3LightTheme,
	colors: LightScheme,
};

const DarkTheme = {
	...MD3DarkTheme,
	colors: DarkScheme,
};

const Stack = createStackNavigator();

export default function App() {
	const scheme = useColorScheme();
	const theme = scheme === 'dark' ? DarkTheme : LightTheme;
	return (
		<PaperProvider theme={theme}>
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
