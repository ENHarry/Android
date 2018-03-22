import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

import ViewContainer from '../../Components/Common/ViewContainer';
import NavBar from '../../Components/Header/NavBar';
// import ScrollableTabView from 'react-native-scrollable-tab-view';
import JobList from './JobList';
import LofBusinesses from './LofBusinesses';
//import JobSection from '../../Components/JobSection';

class Jobscreen extends Component {
	render () {
		return (
			
			<View flex={1}>
				<NavBar wayto = {this.props.navigation}/>
					<View style = {styles.container}>
					<Text style = {styles.textStyle}> 
						Looking for someone to help take your business to the next level? Or maybe just lend a helping hand? Post your job or skill here!”
					</Text>
				</View>
				<JobList/>
			</View>
			);
	}
}
	const styles = StyleSheet.create ({
		container : {
			backgroundColor: 'maroon',
			alignItems: 'center',
			marginBottom: 10
		},
		textStyle: {
			color: 'white',
			fontSize: 12,
			fontFamily: 'GillSans',
			textAlign: 'center'
		}
	})

export default Jobscreen;