import React, {Component} from 'react';
import {Text, View, StyleSheet, Linking} from 'react-native';

import NavBar from '../../Components/Header/NavBar';
import ViewContainer from '../../Components/Common/ViewContainer';
import DandMList from './DandMList';
import {Button, ClickEmail} from '../../Components/Common';

class DandMscreen extends Component {

	render () {
		return (
			<ViewContainer>
				<NavBar/>
				<View style={{alignItems:'center', paddingBottom:5}}>
				<ClickEmail onPress = {() => Linking.openURL('https://goo.gl/forms/Gv0ZJiEMQbzauTOo1')}>
          <Text style = {styles.feedbackText}>Leave us feedback by clicking here!</Text>
        </ClickEmail>
				</View>
				<View style = {styles.container}>
					<Text style = {styles.textStyle}> Click the rows to learn more about each mentor </Text>
				</View>
				<DandMList/>
				<View alignItems = "center" paddingTop = {5} borderTopWidth = {StyleSheet.hairlineWidth}>
					<Button onPress = {() => Linking.openURL('https://www.fordhamfoundry.org/about-us/team/')}> Click to learn more </Button>
				</View>
			</ViewContainer>
		);
	}
}

const styles = StyleSheet.create ({
	container : {
		backgroundColor: 'maroon',
		alignItems: 'center'
	},
	textStyle: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'GillSans',
		textAlign: 'center'
	},
	feedbackText: {
		fontSize: 20,
		textAlign: 'center',
		justifyContent: 'center'
	}
})





export default DandMscreen;