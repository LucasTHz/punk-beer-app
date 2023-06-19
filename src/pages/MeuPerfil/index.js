import React, { useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavBar } from '../../components/NavBar';
import { useTheme, Text, TextInput, Button } from 'react-native-paper';
import { style } from './styles';
import { useAuth } from '../../contexts/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MeuPerfil() {
	const theme = useTheme();
	const { user } = useAuth();
	const [email, setEmail] = React.useState(user.usu_email);
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	const handleDelete = () => {};

	const handleUpdate = () => {
		console.log(email, password);
	};

	return (
		<>
			<NavBar title="Meu Perfil" icon="dots-vertical" />
			<Text variant="titleLarge" style={style.title}>
				Olá {user.usu_nome}
			</Text>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={style.container}>
					<View style={style.centeredView}>
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
							mode="outlined"
							style={style.centeredView.input}
						></TextInput>
						<TextInput
							label="Senha"
							onChange={(password) => setPassword(password)}
							value={password}
							mode="outlined"
							secureTextEntry
							style={style.centeredView.input}
							right={<TextInput.Icon icon="eye" />}
						></TextInput>
						<TextInput
							label="Confirmar Senha"
							onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
							value={confirmPassword}
							secureTextEntry
							style={style.centeredView.input}
							right={<TextInput.Icon icon="eye" />}
							mode="outlined"
						></TextInput>
					</View>
					<Button mode="contained" onPress={handleUpdate()}>
						Atualizar
					</Button>
					<Text variant="labelMedium" style={style.footer}>
						Caso deseja excluir sua conta,{' '}
						<TouchableOpacity style={style.buttonDeleteAccount} onPress={handleDelete()}>
							<Text variant="labelMedium">clique aqui</Text>
						</TouchableOpacity>
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
}
