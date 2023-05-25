import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row', // Exibe os cards em uma única linha horizontal
		marginLeft: 20,
		marginTop: 20,
	},
	card: {
		width: 120,
	},
	image: {
		// alignContent: 'center',
		height: 130,
		// width: 50,
	},
	text: {
		marginTop: 5,
	},
});
