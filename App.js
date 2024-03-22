import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { LightScheme } from './assets/themes/LightScheme';
import { DarkScheme } from './assets/themes/DarkScheme';
import { useColorScheme } from 'react-native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

const LightTheme = {
	...MD3LightTheme,
	colors: LightScheme,
};

const DarkTheme = {
	...MD3DarkTheme,
	colors: DarkScheme,
};
if (__DEV__) {
	import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function App() {
	const scheme = useColorScheme();
	const theme = scheme === 'dark' ? DarkTheme : LightTheme;
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</NavigationContainer>
		</PaperProvider>
	);
}
