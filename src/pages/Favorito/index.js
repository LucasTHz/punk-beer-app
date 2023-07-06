import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { ListCard } from '../../components/Card/ListCard';
import { ScrollView } from 'react-native-gesture-handler';
import { SimpleGrid } from 'react-native-super-grid';
import { styles } from './styles';
import { useAuth } from '../../contexts/auth';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';

const Favorito = () => {
	const { signOut, getMyFavorite } = useAuth();
	const navigation = useNavigation();
	const [error, setError] = useState({});
	const [cards, setCards] = React.useState([]);
	const [showDialogError, setShowDialogError] = useState(false);
	const [showMessageEmpty, setShowMessageEmpty] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function loadMyList() {
			const result = await getMyFavorite();

			if (result.message === 'Nenhum item em sua lista de favoritos') {
				setIsLoading(false);
				return setShowMessageEmpty(true);
			}
			if (result.error) {
				handleSetError(result);
				setIsLoading(false);
			} else {
				setCards(result);
				setIsLoading(false);
			}
		}

		setIsLoading(true);

		loadMyList();
	}, []);

	const handleSignOut = () => signOut();

	const handleSetError = (data) => {
		setError(data);
		setShowDialogError(true);
	};
	return (
		<>
			<NavBar
				title="Meus Favoritos"
				icon1="magnify"
				icon2="dots-vertical"
				menu={{ title: 'Sair', actionMenu: () => handleSignOut }}
			/>
			{showMessageEmpty ? (
				<View style={styles.messageEmpty}>
					<Text variant="headlineLarge">Sem item nos favoritos</Text>
					<Text variant="titleMedium">Faça uma busca e favorite os resultados</Text>
				</View>
			) : (
				<View style={styles.container}>
					<ScrollView>
						<SimpleGrid
							data={cards}
							keyExtractor={(card) => card.id_favorito.toString()}
							renderItem={({ item }) => <ListCard title={item.fav_nome} />}
							style={styles.scroll}
						/>
					</ScrollView>
				</View>
			)}
		</>
	);
};
export default Favorito;
