import { useNavigation } from '@react-navigation/native';
import { Keyboard, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { styles } from './styles';
import { useAuth } from '../../../contexts/auth';
import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DialogError } from '../../../components/DialogError';
import { DialogSuccess } from '../../../components/DialogSuccess';
const CreateItem = ({ route }) => {
	const navigation = useNavigation();
	const { createItemMyList, user } = useAuth();

	const [drinkName, setDrinkName] = useState('');
	const [foodName, setFoodName] = useState('');
	const [local, setLocal] = useState('');
	const [comments, setComments] = useState('');
	const [showDialogSuccess, setShowDialogSuccess] = useState(false);
	const [messageSuccess, setMessageSuccess] = useState('');
	const [showDialogError, setShowDialogError] = useState(false);
	const [error, setError] = useState({});

	const handleSetSuccess = async (data) => {
		setMessageSuccess(data.message);
		setShowDialogSuccess(true);
	};

	const handleSetError = (data) => {
		setError(data);
		setShowDialogError(true);
	};

	async function handleCreateItem() {
		const result = await createItemMyList({
			list_nome_cerveja: drinkName,
			list_nome_comida: foodName,
			list_comentarios: comments,
			list_local: local,
		});
		console.log(result.status);

		if (result.error) {
			handleSetError(result);
		} else if (result.status === 400) {
			handleSetError(result);
		} else {
			handleSetSuccess(result);
		}
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<ScrollView>
				<View style={styles.container}>
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
								Voltar
							</Button>
							<Button mode="contained" onPress={() => handleCreateItem()} style={styles.groupButton.buttonFormDelete}>
								Criar
							</Button>
						</View>
					</View>
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
							navigation={() => navigation.goBack()}
						/>
					)}
				</View>
			</ScrollView>
		</TouchableWithoutFeedback>
	);
};

export default CreateItem;
