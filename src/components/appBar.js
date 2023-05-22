import * as React from 'react';
import { Appbar } from 'react-native-paper';

export const appBar = (props) => (
	<Appbar.Header>
		<Appbar.Content title={props.title} />
		<Appbar.Action icon={props.icon1} onPress={() => {}} />
		<Appbar.Action icon={props.icon2} onPress={() => {}} />
	</Appbar.Header>
);
