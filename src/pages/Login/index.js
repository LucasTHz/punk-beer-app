import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../Login/styles';
import { TextInput, Button } from 'react-native-paper';
import { DialogError } from '../../components/DialogError';
import { useAuth } from '../../contexts/auth';

export function TelaLogin({ navigation }) {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [showPassord, setShowPassord] = useState(true);
	const [error, setError] = useState(false);
	const { signed, signIn } = useAuth();

	function handleSignIn() {
		signIn(email, senha);
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
						onChangeText={(email) => setEmail(email)}
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
					<Button style={styles.buttonLogin} onPress={() => handleSignIn()} mode="contained">
						<Text style={styles.textButton}>Entrar</Text>
					</Button>
					<TouchableOpacity onPress={() => navigation.navigate('TelaRegistrar', {})}>
						<Text style={styles.textButton}>Não tem uma conta? Faça uma já clicando AQUI</Text>
					</TouchableOpacity>
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
