import * as React from 'react';
import { NavBar } from '../../components/NavBar';
import { ListCard } from '../../components/Card/ListCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { SimpleGrid } from 'react-native-super-grid';
import { styles } from './styles';

const cards = [
	{ id: 1, title: 'Card 1' },
	{ id: 2, title: 'Card 2' },
	{ id: 3, title: 'Card 3' },
	{ id: 4, title: 'Card 4' },
	{ id: 5, title: 'Card 5' },
	{ id: 5, title: 'Card 6' },
	{ id: 6, title: 'Card 1' },
	{ id: 7, title: 'Card 2' },
	{ id: 8, title: 'Card 3' },
	{ id: 9, title: 'Card 4' },
	{ id: 10, title: 'Card 5' },
	{ id: 11, title: 'Card 6' },
];

export default function Favorito({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<NavBar title="Meus Favoritos" icon1="magnify" icon2="dots-vertical" />
			<ScrollView>
				<SimpleGrid
					data={cards}
					keyExtractor={(card) => card.id.toString()}
					renderItem={({ item }) => <ListCard title={item.title} />}
					style={styles.scroll}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
