import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dialog, Portal, Text } from 'react-native-paper';

export const DialogError = (props) => {
	const [visible, setVisible] = useState(props.visible);
	const hideDialog = () => {
		setVisible(false);
		props.onDismiss();
	};

	return (
		<Portal>
			<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Icon icon="alert" />
				<Dialog.Title style={styles.title}>{props.title}</Dialog.Title>
				<Dialog.Content>
					<Text variant="bodyMedium">
						{Array.isArray(props.body)
							? props.body.map((item, index) => {
									return (
										<Text key={index}>
											{item} {'\n'}
										</Text>
									);
							  })
							: props.body}
					</Text>
				</Dialog.Content>
			</Dialog>
		</Portal>
	);
};
const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
	},
});
