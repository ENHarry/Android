import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureText, multiline, height}) => {
	const {inputStyle, labelStyle, containerStyle} = styles

	return (
		<View style = {containerStyle}>
			
			<Text style = {labelStyle}>{label}</Text>
		
			<TextInput
				autoCapitalize = 'none'
				secureTextEntry = {secureText}
				underlineColorAndroid='rgba(0,0,0,0)'
				placeholder = {placeholder}
				autoCorrect = {false}
				style = {inputStyle}
				value = {value}
				onChangeText = {onChangeText}
				multiline = {multiline || false}
				height = {height || 30}
			/>
			
		</View>
		);
};

const styles = {
	containerStyle: {
      //flex: 1,
      //alignItems: 'center',
      //justifyContent:'center',
      //paddingTop: 23
		flex: 1,
		//flexDirection: 'column',
		//height: undefined,
		marginBottom: 0,
		// alignItems: 'center',
		padding: 0
	},
	inputStyle: {
			padding:0,
			paddingLeft: 5,
      margin:0,
      //height: 40,
      borderColor: 'grey',
      borderWidth: 1,
		// color: '#000',
		// paddingRight: 5,
		 alignSelf: "stretch",
		// height: 30,
		// fontSize: 18,
		//  lineHeight: 75,
		// //flex: 1,
		// paddingLeft: 10,
		// borderColor: 'black',
		// borderWidth: StyleSheet.hairlineWidth
	},
	labelStyle: {
		//flex: 1,
		fontSize: 18,
		paddingBottom: 5,
		fontWeight: 'bold',
		fontFamily: "sans-serif"
	}
}

export {Input};