import { StyleSheet } from 'react-native';

export const styles = {
	// I want create a style for this component. How can I do this? I need styled a image in top of left corner.
	container: {
		flex: 1,
		padding: 16,
	},
	bgcontainer: {
		flex: 1,
	},
	centeredView: {
		input: {
			width: 350,
			marginTop: 20,
		},
	},
	bgtext: {
		color: 'white',
		fontSize: 42,
		lineHeight: 84,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: '#000000c0',
	},
	form: {
		marginTop: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputUserName: {
		backgroundColor: '#FFF',
		width: 250,
		height: 35,
		borderRadius: 5,
		padding: 5,
	},
	inputForm: {
		backgroundColor: '#FFF',
		marginTop: 15,
		width: 250,
		height: 35,
		borderRadius: 5,
		padding: 10,
	},

	groupButton: {
		flexDirection: 'row',
		marginTop: 20,
		buttonFormDelete: {
			marginLeft: 20,
		},
	},
	textButton: {
		color: '#000',
		fontWeight: 'bold',
	},
	textAlert: {
		color: '#FF0000',
		fontWeight: 'bold',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
};
