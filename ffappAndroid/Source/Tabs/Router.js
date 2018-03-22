import React from 'react';
import {Image} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Homescreen from '../Tabs/Home/Homescreen';
import Jobscreen from '../Tabs/Jobs/Jobscreen';
import Bubblescreen from '../Tabs/Bubble/Bubblescreen';
import FFBusscreen from '../Tabs/Bubble/FFBusscreen';
import DandMscreen from '../Tabs/DandM/DandMscreen';
import LoginScreen from '../Tabs/Login/LoginScreen';

export const FFBusStack = StackNavigator ({
	Bubble: {
		screen: Bubblescreen,
		navigationOptions: {
			headerTitle: <Image source = {require('../../Images/foundry-logo-top-bar.png')} 
				style = {{height:40, width: 150, marginBottom: 20, alignSelf: 'center', marginTop: 20}}/>,
			headerStyle: {
       			backgroundColor: '#f7f7f8',
       			elevation: null
       		},
       		headerTitleStyle: {
  				fontSize: 20
  			},
  			headerBackStyle: {
  				color: 'red'
  			},
	},
},
	FFBus: {
		screen: FFBusscreen,
		navigationOptions: {
			headerTitle: 'Foundry Businesses',
			headerStyle: {
       			backgroundColor: '#f7f7f8',
       			elevation: null
       		},
       		headerTitleStyle: {
       			width: 214,
  				fontSize: 20,
  				fontFamily: 'GillSans',
  				color: 'black',
  				paddingBottom: 20
  			},
  			headerTintColor: 'maroon'

  		}
	}     		    		

})


export const Tabs = TabNavigator ({

	Home: {
		screen: Homescreen,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-home":"ios-home-outline"} size = {32} color = {focused? "darkred":"black"}/>,
			showIcon: true
			}
		},

	Jobs: {
		screen: Jobscreen,
		navigationOptions: {
			tabBarLabel: 'Jobs',
			tabBarIcon: ({tintColor, focused}) => <Icon name = {focused ? "ios-briefcase":"ios-briefcase-outline"} size = {30} color = {focused? "darkred":"black"}/>
		}
	},
	
	Bubble: {
		screen: FFBusStack,
		navigationOptions: {
			tabBarIcon: ({focused}) => <Image source = {focused ? require('../../Images/bubbleclickedon.png'):require('../../Images/bubbleiconbetter.png')} style = {{height: 30, width: 28, marginTop: 5}}/>
		}
	},

	DandMScreen: {
		screen: DandMscreen,
		navigationOptions: {
			tabBarLabel: 'DandM',
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-people": "ios-people-outline"} size = {30} color = {focused? "darkred":"black"}/>
		}
	},

	Login: {
		screen: LoginScreen,
		navigationOptions: {
			tabBarIcon: ({tintColor, focused}) => <Icon name  = {focused ? "ios-lock": "ios-lock-outline"} size = {30} color = {focused? "darkred":"black"}/>
			
		}
	},

},

	{ 
		initialRouteName: 'Home',
		tabBarOptions: {
			showLabel: false,
			showIcon: true,
			iconColor: "black",
			style: {
			backgroundColor: '#ededee',
			}
		}
	}
);