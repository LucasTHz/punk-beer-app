import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		// alignItems: 'baseline',
		alignItems: 'center',
		justifyContent: 'center',
	},
	messageEmpty: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 200,
	},
	scroll: {
		marginRight: 10,
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
	fab: {
		position: 'absolute',
		// zIndex: 100,
		margin: 16,
		right: 0,
		bottom: 0,
	},
	animation: {
		width: 500,
	},
});
