import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../Login/styles';
import { TextInput, Button, Dialog, Portal } from 'react-native-paper';
import { DialogError } from '../../components/dialogError';

export function TelaLogin({ navigation }) {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [menssagem, setMenssagem] = useState('');
	const [showPassord, setShowPassord] = useState(true);
	const [visible, setVisible] = React.useState(false);
	const [error, setError] = React.useState(false);

	function verificarLogin() {
		var userObj = { email: email, senha: senha };
		var jsonBody = JSON.stringify(userObj);
		navigation.navigate('Home');

		// fetch('https://punk-beer-api.glitch.me/api/usuario/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Accept: 'application/json',
		// 	},
		// 	body: jsonBody,
		// })
		// 	.then((response) => response.headers)
		// 	.then((data) => {
		// 		const token = data.get('x-access-token');
		// 		if (token) {
		// 			navigation.navigate('Home');
		// 		} else {
		// 			setError(true);
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<View style={styles.form}>
					<TextInput
						style={{ width: 250, textAlignVertical: 'center', marginBottom: 15 }}
						label="Email"
						placeholder="Seu email"
						value={email}
						onChange={(email) => setEmail(email)}
						mode="outlined"
					/>
					<TextInput
						style={{ width: 250, textAlignVertical: 'center' }}
						label="Sua senha"
						placeholder="Senha"
						autoCompleteType="current-password"
						autoCapitalize="none"
						secureTextEntry={showPassord}
						onChangeText={(event) => setSenha(event)}
						right={
							<TextInput.Icon icon={showPassord ? 'eye' : 'eye-off'} onPress={() => setShowPassord(!showPassord)} />
						}
						mode="outlined"
					/>
					<Button style={styles.buttonLogin} onPress={() => verificarLogin()} mode="contained">
						<Text style={styles.textButton}>Entrar</Text>
					</Button>
					<TouchableOpacity onPress={() => navigation.navigate('TelaRegistrar', {})}>
						<Text style={styles.textButton}>Não tem uma conta? Faça uma já clicando AQUI</Text>
					</TouchableOpacity>
					<Text style={styles.textAlert}>{menssagem}</Text>
					{error ? (
						<DialogError
							title="Error"
							body="Senha ou email invalidos!"
							visible={error}
							onDismiss={() => setError(false)}
						/>
					) : null}
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
