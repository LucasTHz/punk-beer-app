import React, { useState } from 'react';

import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { styles } from './style';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
	const [nome, setNome] = useState('');
	const [cpf, setCpf] = useState('');
	const [dataNascimento, setDataNascimento] = useState(new Date());
	const navigation = useNavigation();

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setDataNascimento(currentDate);
	};

	const showMode = () => {
		DateTimePickerAndroid.open({
			value: dataNascimento,
			onChange,
			mode: 'date',
		});
	};

	const goBack = () => navigation.goBack();

	const nextTela = () => navigation.navigate('TelaRegistrar2', { nome, cpf, dataNascimento });

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Text variant="titleLarge">Precisamos de algumas informações sobre voçê</Text>
				<TextInput
					label="Nome"
					value={nome}
					onChangeText={(nome) => setNome(nome)}
					mode="outlined"
					style={styles.centeredView.input}
				></TextInput>
				<TextInput
					label="CPF"
					value={cpf}
					onChangeText={(cpf) => setCpf(cpf)}
					mode="outlined"
					style={styles.centeredView.input}
				></TextInput>
				<TextInput
					label="Data de Nascimento"
					value={dataNascimento.toLocaleDateString('pt-BR')}
					onChangeText={(dataNascimento) => setDataNascimento(dataNascimento)}
					mode="outlined"
					right={<TextInput.Icon icon="calendar-month-outline" onPress={showMode} />}
					style={styles.centeredView.input}
				></TextInput>

				<View style={styles.groupButton}>
					<Button mode="contained" onPress={() => goBack()}>
						Voltar
					</Button>
					<Button mode="contained" onPress={() => nextTela()} style={styles.groupButton.buttonFormDelete}>
						Proximo
					</Button>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
