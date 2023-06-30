import React from 'react';
import { Menu as MenuPaper } from 'react-native-paper';

const Menu = ({ visible, onDismiss, anchor, handleMenuItemPress, icon, title }) => {
	return (
		<MenuPaper visible={visible} onDismiss={onDismiss} anchor={anchor} icon={icon}>
			<MenuPaper.Item onPress={handleMenuItemPress} title={title} />
		</MenuPaper>
	);
};

export default Menu;
