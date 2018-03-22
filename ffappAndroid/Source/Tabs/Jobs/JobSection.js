import React, {Component} from 'react';
import {Button, Text, TouchableWithoutFeedback, View, LayoutAnimation, StyleSheet} from 'react-native';
import {CardSection} from '../../Components/Common/CardSection';
import {connect} from 'react-redux';
import * as actions from '../../Actions';

class JobSection extends Component {
	render() {
		const {id, category} = this.props.job;
		return (
				<View style = {styles.sectionStyle}>
						<Text fontSize = {13}> {category}</Text>
				</View>
		);
	}
}

const styles = {
	sectionStyle: {
		flex: 1,
    	padding: 8,
    	justifyContent: 'center',
    	backgroundColor: '#EAEAEA',
	},
	titleStyle: {
		fontSize: 18,
		textAlign: 'center',
		flex: 1,   
	}
}

const mapStateToProps = state => {
	return {jobs: state.jobs};
};

export default connect(mapStateToProps, actions)(JobSection);