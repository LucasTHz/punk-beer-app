import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { NavBar } from '../../components/NavBar';
import { ScrollView } from 'react-native-gesture-handler';
import { SimpleGrid } from 'react-native-super-grid';
import { ListCard } from '../../components/Card/ListCard';
import { useAuth } from '../../contexts/auth';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function MinhaLista() {
	const navigation = useNavigation();

	const { signOut, getMyList } = useAuth();
	const [cards, setCards] = React.useState([]);
	const [error, setError] = useState({});
	const [showDialogError, setShowDialogError] = useState(false);

	useEffect(() => {
		async function loadMyList() {
			const result = await getMyList();

			if (result.error) {
				handleSetError(result);
			} else {
				setCards(result);
			}
		}
		loadMyList();
	}, []);

	const handleSetError = (data) => {
		setError(data);
		setShowDialogError(true);
	};

	const getMyItem = (card) => {
		navigation.navigate('Show Item', { card });
	};

	return (
		<>
			<NavBar title="Minha Lista" icon1="magnify" icon2="dots-vertical" menu={{ title: 'Sair' }} />
			<ScrollView>
				{showDialogError && (
					<DialogError
						title={error.error}
						body={error.message}
						visible={showDialogError}
						onDismiss={() => setShowDialogError(false)}
					/>
				)}
				<SimpleGrid
					data={cards}
					keyExtractor={(card) => card.id_minha_lista.toString()}
					renderItem={({ item }) => (
						<ListCard
							title={item.list_nome_cerveja}
							showCard={() => {
								getMyItem(item);
							}}
						/>
					)}
					style={styles.scroll}
				/>
			</ScrollView>
		</>
	);
}
