import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavBar } from '../../components/NavBar';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
import { styles } from './styles';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Historico() {
	return (
		<>
			<NavBar title="Historico" icon1="magnify" icon2="delete-sweep-outline" menu={{ title: 'Sair' }} />
			<View style={styles.container}>
				<View style={styles.messageEmpty}>
					<Text variant="headlineLarge">Sem historico</Text>
					<Text variant="titleMedium">Faça uma pesquisa para registrar aqui</Text>
					<Icon name="history" size={25} style={styles.icon} />
				</View>
			</View>
		</>
	);
}
