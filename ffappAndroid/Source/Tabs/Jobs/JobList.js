import React, {Component} from 'react';
import {Text, ListView, StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Linking} from 'react-native';
import {connect} from 'react-redux';
import {fetchJobs, jobDelete} from '../../Actions';
import JobForm from './JobForm';
import firebase from 'firebase';

import JobListItem from './JobListItem';
import JobSection from './JobSection';
import JobCreate from './JobCreate';
import {JobDisplay} from './JobDisplay';
import {Card, CardSection, Button, ButtonCont, Confirm, CSCol, ClickEmail} from '../../Components/Common';
import ViewContainer from '../../Components/Common/ViewContainer';

class JobList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			showDesModal: false,
			curKey: null,
			canDelete: false
		}
	}

	componentWillMount(){
		this.props.fetchJobs()
	}

	renderModal(){
		 this.setState({showModal: true})
	}

	onReturn(){
		this.setState({showModal: false})
		this.setState({showDesModal: false})
	}
	
	renderDes(key,del){
		this.setState({curKey: key})
		this.setState({canDelete: del})
		this.setState({showDesModal: true})
	}

	deleteJob(key){
		this.setState({showDesModal: false})
		this.setState({curKey: null})
		this.setState({canDelete: false})
		this.props.jobDelete(key)
	}

	fetchJobBoard(){

		jb = this.props.jb
		rows=[]
		if(this.props.user === null){
			currentUserId = -1
		}else{
			currentUserId = firebase.auth().currentUser.uid
		}
		for(var key in jb){
			const temp = key
			//changed from if to else if
			if(currentUserId === jb[key].user){ //If current user created job, show delete button
				rows.unshift(
				<TouchableOpacity onPress={() => {this.renderDes(temp,true)}}>
					<CSCol>
							<Text style={styles.userJobStyle}>{jb[key].title.toUpperCase()}</Text>
							<Text style={styles.nameStyle}>{jb[key].name}</Text>
							<Text style = {styles.dateStyle}>{jb[key].date}</Text>
					</CSCol>

				</TouchableOpacity>
				)
			}else{ //If user did not create this job, dont show delete button (2nd param in renderDes)
				rows.unshift(
				<TouchableOpacity onPress={ ()=>{this.renderDes(temp,false)} }>
					<CSCol>
							<Text style={styles.jobStyle}>{jb[key].title}</Text>
							<Text style = {styles.nameStyle}>{jb[key].name}</Text>
							<Text style = {styles.dateStyle}>{jb[key].date}</Text>
					</CSCol>
				</TouchableOpacity>
				)
			}
		}
		return <ScrollView>{rows}</ScrollView>
	}


	checkIf() {
		if (this.props.loading){
			return <Spinner size="large"/>
		}
		else if(this.props.jb === null)
		{	
			if(this.state.showDesModal === true)
			{	
				{this.onReturn()}
			}
			return (
				<View alignItems = "center">
					<Text> No Jobs Posted </Text>
				</View>
			);
		}
		else {
			return (
				this.fetchJobBoard()
			);
		}
	}

	render() {

		return(
			<View style={{flex:1, alignItems: 'center'}}>
				<View style={{paddingBottom:5}}>
					<ClickEmail onPress = {() => Linking.openURL('https://goo.gl/forms/Gv0ZJiEMQbzauTOo1')}>
						<Text style = {styles.feedbackText}>Leave us feedback by clicking here!</Text>
					</ClickEmail>
				</View>
				<View  alignItems = "center" paddingBottom = {5} borderBottomWidth = {StyleSheet.hairlineWidth}>
					<Button onPress={this.renderModal.bind(this)}>
					Post to the Job Board!
					</Button>
				</View>

				{this.checkIf()}
				
				<Confirm
					visible={this.state.showModal}
					onReturn={this.onReturn.bind(this)}
				>
					<JobCreate style={{flex:1}}/>
				</Confirm>

				<Confirm 
					visible={this.state.showDesModal}
					onReturn={this.onReturn.bind(this)}
				>
					<JobDisplay 
						visible={this.state.showDesModal}
						onReturn={this.onReturn.bind(this)}
						jobBoard={this.props.jb} 
						jobKey={this.state.curKey} 
						canDelete={this.state.canDelete} 
						jobDelete={this.props.jobDelete} />
				</Confirm>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 8
	},
 	separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  catStyle: {
  	fontSize: 16,
  	paddingLeft: 8,
  	color:'blue',
		fontWeight: 'bold',
		fontFamily: "GillSans"
  },
  busStyle: {
  	fontSize: 16,
  	paddingLeft: 8,
		fontFamily: "GillSans"
  },
  dateStyle: {
  	paddingTop: 6,
  	paddingLeft: 8,
  	fontSize: 14,
  	fontFamily: "GillSans"
  },
  nameStyle: {
  	fontSize: 16,
  	paddingLeft: 8,
  	fontFamily: "GillSans"
  },
  jobStyle: {
  	fontSize: 18,
		paddingLeft: 8,
		color: 'darkblue',
		fontWeight: 'bold',
		fontFamily: "GillSans"
	},
  textStyle: {
		fontSize: 16,
		fontWeight: 'bold'
  },
  userJobStyle:{
		fontSize: 18,
		paddingLeft: 8,
		color: '#4AB312',
		fontWeight: 'bold',
		fontFamily: "GillSans"
  },
		feedbackText: {
			fontSize: 20,
			textAlign: 'center'
	}
});

const mapStateToProps = state => {
	const {email, jb} = state.jobForm
	const {user} = state.auth
	return {email, jb, user}
};

export default connect(mapStateToProps, {fetchJobs,jobDelete})(JobList);