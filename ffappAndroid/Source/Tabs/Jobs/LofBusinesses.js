import React, {Component} from 'react';
import {Text, View, ListView} from 'react-native';

class LofBusinesses extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
		  dataSource: ds.cloneWithRows(['row 1', 'row 2']),
		};
	}

	render () {
		return (
			<ListView
				removeClippedSubviews={false}
				dataSource={this.state.dataSource}
        		renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
			);
	}
}

export default LofBusinesses;