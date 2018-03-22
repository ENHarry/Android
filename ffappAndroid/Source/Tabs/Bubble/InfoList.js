import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';

import InfoItem from './InfoItem';

class InfoList extends Component {
	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(this.props.information)
	}

	renderRow(info) {
		return <InfoItem info = {info}/>;
	}

	render() {
		return(
			<ListView removeClippedSubviews={false} contentContainerStyle={{flex: 1}} dataSource = {this.dataSource} 
			 renderRow = {this.renderRow}/>
		);
	}
}

const mapStateToProps = state => {
	return {information: state.information};
};

export default connect(mapStateToProps)(InfoList);