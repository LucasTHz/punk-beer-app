import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { styles } from '../style';
import { useAuth } from '../../../contexts/auth';
import { DialogSuccess } from '../../../components/DialogSuccess';
import { DialogError } from '../../../components/DialogError';

export default function CadastroEmailSenha({ route }) {
	const { cpf, dataNascimento, nome } = route.params;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassord, setShowPassord] = useState(true);
	const [showConfirmPassord, setShowConfirmPassord] = useState(true);
	const [error, setError] = useState({});
	const [showDialogError, setShowDialogError] = useState(false);
	const [showDialogSuccess, setShowDialogSuccess] = useState(false);
	const [messageSuccess, setMessageSuccess] = useState(false);
	const { createUser } = useAuth();
	const navigation = useNavigation();

	const goBack = () => navigation.goBack();

	const handleSetError = (data) => {
		setError(data);
		setShowDialogError(true);
	};

	const handleSetSuccess = async (data) => {
		setPassword('');
		setConfirmPassword('');
		setMessageSuccess(data.message);
		console.log(messageSuccess);
		setShowDialogSuccess(true);
	};

	const handleCreateAccount = async () => {
		const result = await createUser({
			nome: nome,
			email: email,
			senha: password,
			confirmarSenha: confirmPassword,
			cpf: cpf,
			dataNascimento: dataNascimento,
		});

		if (result.error) {
			return handleSetError(result);
		}
		console.log(result);
		if (result.message === 'Usuário cadastrado com sucesso!') {
			handleSetSuccess(result);
			console.log(result.message);
		} else {
			handleSetError(result);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Text variant="titleLarge">Agora cadastre suas credenciais</Text>
				<TextInput
					label="Email"
					value={email}
					onChangeText={(email) => setEmail(email)}
					mode="outlined"
					style={styles.centeredView.input}
				></TextInput>
				<TextInput
					label="Senha"
					value={password}
					onChangeText={(password) => setPassword(password)}
					secureTextEntry={showPassord}
					mode="outlined"
					right={<TextInput.Icon icon={showPassord ? 'eye' : 'eye-off'} onPress={() => setShowPassord(!showPassord)} />}
					style={styles.centeredView.input}
				></TextInput>
				<TextInput
					label="Confirmar senha"
					value={confirmPassword}
					onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
					secureTextEntry={showConfirmPassord}
					mode="outlined"
					right={
						<TextInput.Icon
							icon={showConfirmPassord ? 'eye' : 'eye-off'}
							onPress={() => setShowConfirmPassord(!showConfirmPassord)}
						/>
					}
					style={styles.centeredView.input}
				></TextInput>
				{showDialogError && (
					<DialogError
						title="Dados inválidos"
						body={error.message}
						visible={showDialogError}
						onDismiss={() => setShowDialogError(false)}
					/>
				)}
				{showDialogSuccess && (
					<DialogSuccess
						title="Sucesso!"
						body={messageSuccess}
						visible={showDialogSuccess}
						onDismiss={() => setShowDialogSuccess(false)}
						navigation={() => navigation.navigate('Login')}
					/>
				)}

				<View style={styles.groupButton}>
					<Button mode="contained" onPress={() => goBack()}>
						Voltar
					</Button>
					<Button mode="contained" onPress={() => handleCreateAccount()} style={styles.groupButton.buttonFormDelete}>
						Finalizar
					</Button>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
