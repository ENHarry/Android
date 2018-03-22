import React, {Component} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, Text, Button, LayoutAnimation} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

class PlayView extends Component {
	constructor() {
		super();
		this.state = {
			viewStyle1: {
				height: 0,
				opacity: 0
			},
			viewStyle2: {
				height: 0,
				opacity: 0
			},
			viewStyle3: {
				height: 0,
				opacity: 0
			},
			viewStyle4: {
				height: 0,
				opacity: 0
			}
		}
	}

	animateView1() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
		this.setState({
			viewStyle1: {
				height: this.state.viewStyle1.height > 0? 0: 150
			}

		})

		//this.onSomeEvent()
	}

	animateView2() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
		this.setState({
		viewStyle2: {
				height: this.state.viewStyle2.height > 0? 0: 500
			}
		})
	}

	animateView3() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
		this.setState({
		viewStyle3: {
				height: this.state.viewStyle3.height > 0? 0: 500
			}
		})
	}

	animateView4() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
		this.setState({
		viewStyle4: {
				height: this.state.viewStyle4.height > 0? 0: 500
			}
		})
	}

	onSomeEvent() {
		this.refs.scrollView.scrollTo(0);
	}

	render() {
		let viewStyle1 = [this.state.viewStyle1]
		let viewStyle2 = [this.state.viewStyle2]
		let viewStyle3 = [this.state.viewStyle3]
		let viewStyle4 = [this.state.viewStyle4]
		return (
			<View>
			
			<ScrollView ref = "scrollView">
				<View style = {styles.view}>
					<Text> Hello there this is the Homepage </Text>
					<Text> You have a business idea. Now what? </Text>
					<Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>
					<Icon name = "ios-arrow-dropdown-outline" size = {30}/>
					</Animatable.Text>
					<TouchableOpacity onPress = {this.animateView1.bind(this)}>
						<View alignItems = "center">
							<Text> About </Text>
						</View>
					</TouchableOpacity>
					<View style = {viewStyle1} backgroundColor = "grey" alignItems = "center"> 
						<Text> Scroll Down for More Info </Text>
					</View>
					<TouchableOpacity onPress = {this.animateView2.bind(this)}>
						<View alignItems = "center">
							<Text> Team </Text>
						</View>
					</TouchableOpacity>
					<View style = {viewStyle2} backgroundColor = "red" alignItems = "center"> 
						<Text> Team </Text>
					</View>
					<TouchableOpacity onPress = {this.animateView3.bind(this)}>
						<View alignItems = "center">
							<Text> Team </Text>
						</View>
					</TouchableOpacity>
					<View style = {viewStyle3} backgroundColor = "red" alignItems = "center"> 
						<Text> Team </Text>
					</View>
					<TouchableOpacity onPress = {this.animateView4.bind(this)}>
						<View alignItems = "center">
							<Text> Team </Text>
						</View>
					</TouchableOpacity>
					<View style = {viewStyle4} backgroundColor = "red" alignItems = "center"> 
						<Text> Team </Text>
					</View>
				</View>
				
					
			</ScrollView>
			<Button style = {styles.submitButton} opacity = {0} title = "." color = "white"></Button>
			
			
			</View>
			
			
		);
	}

}

var styles = StyleSheet.create ({
	view: {
		
		backgroundColor: 'white'
	},
	viewInvis: {
		height: 10000,
		opacity: 0
	},
	submitButton: {
		position: 'absolute',
		bottom:0,
		left:0,
	}
})

export default PlayView