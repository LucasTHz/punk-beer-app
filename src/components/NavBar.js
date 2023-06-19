import { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';
import MyMenu from './Menu/Menu';

export const NavBar = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);

	const handleMenuItemPress = () => {
		console.log('Item do menu pressionado');
		closeMenu();
	};

	return (
		<Appbar.Header>
			<Appbar.Content title={props.title} />
			<MyMenu
				visible={isMenuOpen}
				onDismiss={closeMenu}
				anchor={<Appbar.Action onPress={openMenu} icon={props.icon2} />}
			/>
		</Appbar.Header>
	);
};
