import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
const img = require('../../../assets/164.png');
import { styles } from '../../components/Card/styles';

export const ListCard = ({ title, showCard }) => (
	<View style={styles.container}>
		<Card mode="contained" style={styles.card} onPress={showCard}>
			<Card.Content>
				<Card.Cover source={img} style={styles.image} resizeMode="contain" />
				<Text variant="labelMedium" style={styles.text}>
					{title}
				</Text>
			</Card.Content>
		</Card>
	</View>
);
