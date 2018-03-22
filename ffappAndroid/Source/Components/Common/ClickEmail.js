import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Linking} from 'react-native';

const ClickEmail = ({onPress, children}) => {

		return (
			<TouchableOpacity onPress={onPress}>
				<Text style = {styles.emailText}>
					{children}
				</Text>
			</TouchableOpacity>
		)
}

const styles = {
	emailText: {
		color: 'blue',
		fontSize: 14,
		alignItems: 'center'
	}
}

export {ClickEmail};