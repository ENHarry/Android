import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class NavBar extends Component {
	render() {
		return (
			<View style = {styles.navBarBackground}>
			<Image source = {require('../../../Images/foundry-logo-top-bar.png')}
				style = {{height:40, width: 150}}
			/>
			</View>
			);
	}
}

const styles = StyleSheet.create ({
	navBarBackground: {
		height: 64,
		backgroundColor: "#f7f7f8",
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},

	textInNav: {
		fontSize: 20,
		fontWeight: 'bold'
	},

	calbutton: {
		alignItems: 'flex-end'
	}

});

export default NavBar