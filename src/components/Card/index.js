import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Card = ({ imageUrl, title }) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: imageUrl }} style={styles.image} />
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		// backgroundColor: '#fff',
		borderRadius: 8,
		padding: 16,
		marginBottom: 16,
		// elevation: 4,
	},
	image: {
		width: 80,
		height: 80,
		marginRight: 16,
		borderRadius: 4,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default Card;
