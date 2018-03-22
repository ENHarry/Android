import React, {Component} from 'react';
import {Button, Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {CardSection} from '../../Components/Common/CardSection';
import {connect} from 'react-redux';
import * as actions from '../../Actions';

class JobListItem extends Component {

	/*componentWillUpdate() {
		LayoutAnimation.spring();
	}*/
	

	render() {
		const {expanded, jobSelected, name, category, id} = this.props
		console.log(expanded, jobSelected, name, category, id)
		return (
			<TouchableWithoutFeedback onPress = { ()=>{selectJob(id)} }>
				<View>
				
						<Text style = {styles.titleStyle}> {name}, {category}</Text>
					
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		textAlign: 'center',
		flex: 1,
		//position: 'relative'
   
	}
}

const mapStateToProps = (state) => {
	//expanded = state.selectedJobId === ownProps.job.id;
	const {expanded, jobSelected} = state.selectedJobId
	const {id, name, category} = state.jobForm
	return {expanded, jobSelected, name, category, id};
};

export default connect(mapStateToProps, actions)(JobListItem);