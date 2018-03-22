import React, {Component} from 'react';
import {Text, View, ListView, ScrollView} from 'react-native';
import { readUpdates } from '../../Actions';
import { connect } from 'react-redux';

import {UpdateDisplay} from './UpdateDisplay';
import ViewContainer from '../../Components/Common/ViewContainer';

class UpdateList extends Component {
	constructor(props) {
		super(props);
	}

	renderUpdates(){
		updates = this.props.updates

		list = []
		for(key in updates){
			const temp = key

			list.unshift(
				<UpdateDisplay
					key = {key}
					title = {updates[key].business}
					update = {updates[key].update}
					date = {updates[key].date}
					link = {updates[key].link}
					/>
			)
		}
		return <View>{list}</View>
	}
	
	render () {
		return (
				<ScrollView marginTop = {10}>{this.renderUpdates()}</ScrollView>
		)
	}
}

const mapStateToProps = state => {
	const { updates } = state.updateList
	return { updates }
}

export default connect(mapStateToProps, { readUpdates })(UpdateList)