import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scroll: {
		flexDirection: 'row', // Organiza os cards em uma linha horizontal
		alignItems: 'center', // Alinha os cards verticalmente no centro
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
