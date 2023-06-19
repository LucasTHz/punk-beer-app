// Menu.js
import React from 'react';
import { Menu } from 'react-native-paper';

const MyMenu = ({ visible, onDismiss, anchor, handleMenuItemPress, icon }) => {
	const handlePress = () => console.log('Pressed');
	return (
		<Menu visible={visible} onDismiss={onDismiss} anchor={anchor} icon={icon}>
			<Menu.Item onPress={handleMenuItemPress} title="Opção 1" />
			<Menu.Item onPress={handlePress} title="Sair" />
			<Menu.Item onPress={handleMenuItemPress} title="Opção 3" />
		</Menu>
	);
};

export default MyMenu;
