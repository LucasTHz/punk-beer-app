import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
	},
	bgcontainer: {
		flex: 1,
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
	buttonForm: {
		backgroundColor: '#A9A9A9',
		width: 100,
		height: 30,
		borderRadius: 5,
		marginTop: 13,
		alignItems: 'center',
		justifyContent: 'center',
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
	buttonLogin: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,
		marginTop: 38,
	},
	centeredView: {
		input: {
			width: 300,
			marginTop: 20,
		},
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 22,
	},
	groupButton: {
		flexDirection: 'row',
		marginTop: 20,
		buttonFormDelete: {
			marginLeft: 20,
		},
	},
});
