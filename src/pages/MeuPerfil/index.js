import { useCallback, useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { NavBar } from '../../components/NavBar';
import { useTheme, Text, TextInput, Button } from 'react-native-paper';
import { style } from './styles';
import { useAuth } from '../../contexts/auth';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { updateUser } from '../../services/auth';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { DialogError } from '../../components/DialogError';
import Icon from 'react-native-paper/src/components/Icon';
import { DialogSuccess } from '../../components/DialogSuccess';

export default function MeuPerfil() {
	const theme = useTheme();
	const { user, userId, updateUser, getUser } = useAuth();
	let data = new Date(user.usu_data_nascimento);
	const formattedDate = format(data, 'dd/MM/yyyy', { timeZone: 'America/Sao_Paulo' });

	const [email, setEmail] = useState(user.usu_email);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassord, setShowPassord] = useState(true);
	const [showConfirmPassord, setShowConfirmPassord] = useState(true);
	const [name, setName] = useState(user.usu_nome);
	const [date, setDate] = useState(formattedDate);
	const [showDate, setShowDate] = useState(false);
	const [error, setError] = useState({});
	const [showDialogError, setShowDialogError] = useState(false);
	const [showDialogSuccess, setShowDialogSuccess] = useState(false);
	const [messageSuccess, setMessageSuccess] = useState(false);

	const handleDelete = () => {};

	const handleSetError = (data) => {
		setError(data);
		setShowDialogError(true);
	};

	const handleSetSuccess = async (data) => {
		setPassword('');
		setConfirmPassword('');
		setMessageSuccess(data);
		setShowDialogSuccess(true);
		await getUser();
	};

	async function handleUpdate() {
		const result = await updateUser({ senha: password, confirmarSenha: confirmPassword, nome: name });

		if (result.error) {
			handleSetError(result);
		} else {
			handleSetSuccess(result);
		}
	}

	return (
		<>
			<NavBar title="Meu Perfil" icon="dots-vertical" />
			<View style={style.viewTitle}>
				<Text variant="titleLarge" style={style.title}>
					Olá {user.usu_nome}
				</Text>
			</View>
			<ScrollView style={style.viewTitle}>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<View style={style.container}>
						<View style={style.centeredView}>
							{showDialogError && (
								<DialogError
									title={error.error}
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
									navigation={() => {}}
								/>
							)}
							<TextInput
								label="Cpf"
								value={user.usu_cpf}
								mode="outlined"
								disabled={true}
								style={style.centeredView.input}
							></TextInput>
							<TextInput
								label="Email"
								onChange={(email) => setEmail(email)}
								value={email}
								disabled={true}
								mode="outlined"
								style={style.centeredView.input}
							></TextInput>
							<TextInput
								label="Data de nascimento"
								value={date}
								mode="outlined"
								disabled={true}
								style={style.centeredView.input}
								forceTextInputFocus={false}
							></TextInput>
							<TextInput
								label="Nome"
								onChangeText={(name) => setName(name)}
								value={name}
								mode="outlined"
								placeholder="Nome"
								autoCapitalize="words"
								style={style.centeredView.input}
							></TextInput>

							<TextInput
								label="Senha"
								onChangeText={(password) => setPassword(password)}
								value={password}
								mode="outlined"
								autoCompleteType="current-password"
								placeholder="Senha"
								autoCapitalize="none"
								secureTextEntry={showPassord}
								style={style.centeredView.input}
								right={
									<TextInput.Icon icon={showPassord ? 'eye' : 'eye-off'} onPress={() => setShowPassord(!showPassord)} />
								}
							></TextInput>
							<TextInput
								label="Confirmar Senha"
								onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
								value={confirmPassword}
								mode="outlined"
								autoCompleteType="current-password"
								placeholder="Confirmar Senha"
								autoCapitalize="none"
								secureTextEntry={showConfirmPassord}
								style={style.centeredView.input}
								right={
									<TextInput.Icon
										icon={showConfirmPassord ? 'eye' : 'eye-off'}
										onPress={() => setShowConfirmPassord(!showConfirmPassord)}
									/>
								}
							></TextInput>
						</View>
						<Button mode="contained" onPress={() => handleUpdate()}>
							Atualizar
						</Button>
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
			<Text variant="labelMedium" style={style.footer}>
				Caso deseja excluir sua conta,{' '}
				<TouchableOpacity style={style.buttonDeleteAccount} onPress={handleDelete()}>
					<Text variant="labelMedium">clique aqui</Text>
				</TouchableOpacity>
			</Text>
			{showDialogError && <DialogError show={showDialogError} title={error.error} body={error.message} />}
		</>
	);
}
