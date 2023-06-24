import { useState } from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import Menu from './Menu/Menu';
import Search from './Search/SearchBar';
import App from '../../App';

export const NavBar = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);
	const openSearch = () => setIsSearchOpen(true);

	const handleSearchQueryChange = (query) => {
		setSearchQuery(query);
	};

	return (
		<Appbar.Header>
			<Appbar.Content title={props.title} />
			<Menu
				visible={isMenuOpen}
				onDismiss={closeMenu}
				handleMenuItemPress={props.menu?.actionMenu()}
				title={props.menu?.title}
				anchor={<Appbar.Action onPress={openMenu} icon={props.icon2} />}
			/>
			<Appbar.Action onPress={openSearch} icon={props.icon1} />
			{isSearchOpen && <Searchbar placeholder="Pesquisar" onChangeText={handleSearchQueryChange} value={searchQuery} />}
		</Appbar.Header>
	);
};
