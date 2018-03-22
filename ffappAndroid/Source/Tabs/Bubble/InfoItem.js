import React, {Component} from 'react';
import {Button, Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {CardSection} from '../../Components/Common/CardSection';
import {connect} from 'react-redux';
import * as actions from '../../Actions';

class InfoItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		if(this.props.expanded && (this.props.info.id == 1)) {
			return (
				<View>
				<Button title = "Business 1"/>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				</View>
				);
		}
		else if (this.props.expanded && (this.props.info.id == 2)) {
			return (
			<CardSection style = {{flex:1}}>
				<Button title = "Business 2"/>
				</CardSection>
			);
		}
		else if (this.props.expanded && (this.props.info.id == 3)) {
			return(
				<CardSection style = {{flex:1}}>
					<Button title = "Business 3"/>
				</CardSection>
			);
		}
		else if (this.props.expanded && (this.props.info.id == 4)) {
			return(
				<View>
				<Button title = "Business 4"/>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				<Text> About </Text>
				</View>
				
			);
		}
	}

	render() {
		//console.log(this.props);
		const {id, title} = this.props.info;
		return (
			<TouchableWithoutFeedback onPress = {() => this.props.selectInfo(id)}>
				<View>
					<CardSection>
						<Text style = {styles.titleStyle}> {title}</Text>
					</CardSection>
					{this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
	expanded = state.selectedInfoId === ownProps.info.id;

	return {expanded};
};

export default connect(mapStateToProps, actions)(InfoItem);