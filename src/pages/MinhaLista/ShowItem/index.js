import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { styles } from './styles';
import Card from '../../../components/Card';
import { useAuth } from '../../../contexts/auth';
import { DialogError } from '../../../components/DialogError';
import { DialogSuccess } from '../../../components/DialogSuccess';

const ShowItem = ({ route }) => {
	const drink = route.params;
	const navigation = useNavigation();
	const idItem = drink.card.id_minha_lista;
	const { deleteItemMyList } = useAuth();
	const [drinkName, setDrinkName] = useState(drink.card.list_nome_cerveja);
	const [foodName, setFoodName] = useState(drink.card.list_nome_comida);
	const [local, setLocal] = useState(drink.card.list_local);
	const [comments, setComments] = useState(drink.card.list_comentarios);
	const [showDialogSuccess, setShowDialogSuccess] = useState(false);
	const [messageSuccess, setMessageSuccess] = useState('');
	const [showDialogError, setShowDialogError] = useState(false);
	const [error, setError] = useState({});

	useEffect(() => {
		navigation.setOptions({ title: drinkName });
	}, []);

	const handleSetError = (result) => {
		setError(result);
		setShowDialogError(true);
	};

	const handleSetSuccess = async (result) => {
		setMessageSuccess(result.message);
		setShowDialogSuccess(true);
	};

	const handleDeleteItem = async (idItem) => {
		const result = await deleteItemMyList(idItem);

		if (result.error) {
			handleSetError(result);
		} else {
			handleSetSuccess(result);
		}
	};
	return (
		<View style={styles.container}>
			<Card imageUrl="https://reactnative.dev/img/tiny_logo.png" title="Exemplo de Card" />
			{showDialogSuccess && (
				<DialogSuccess
					title="Sucesso!"
					visible={showDialogSuccess}
					onDismiss={() => setShowDialogSuccess(false)}
					body={messageSuccess}
					navigation={() => navigation.goBack()}
				/>
			)}
			{showDialogError && (
				<DialogError
					visible={showDialogError}
					onDismiss={() => setShowDialogError(false)}
					title={error.error}
					body={error.message}
				/>
			)}
			<View style={styles.form}>
				<TextInput
					label="Nome da Cerveja"
					value={drinkName}
					onChangeText={(drinkName) => setDrinkName(drinkName)}
					mode="outlined"
					style={styles.centeredView.input}
				/>
				<TextInput
					label="Nome da comida"
					value={foodName}
					onChangeText={(foodName) => setFoodName(foodName)}
					mode="outlined"
					style={styles.centeredView.input}
				/>
				<TextInput
					label="Local"
					value={local}
					onChangeText={(local) => setLocal(local)}
					mode="outlined"
					style={styles.centeredView.input}
				/>
				<TextInput
					label="Comentarios"
					value={comments}
					onChangeText={(comments) => setComments(comments)}
					mode="outlined"
					style={styles.centeredView.input}
				/>
				<View style={styles.groupButton}>
					<Button mode="contained" onPress={() => handleUpdateItem()}>
						Atualizar
					</Button>
					<Button mode="contained" onPress={() => handleDeleteItem(idItem)} style={styles.groupButton.buttonFormDelete}>
						Deletar
					</Button>
				</View>
			</View>
		</View>
	);
};

export default ShowItem;
