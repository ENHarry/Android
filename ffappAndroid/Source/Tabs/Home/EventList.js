import React, {Component} from 'react';
import {Text, View, ListView, ScrollView, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { readEvents, remindMe } from '../../Actions'
import {EventDisplay} from './EventDisplay'
import { Confirm, Header } from '../../Components/Common'

class EventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal:false,
			curKey: ''
		}
	}

	componentWillMount(){
		this.props.readEvents()
	}

	renderEvents(){
		events = this.props.events
		
		if(events === null){
			return <View alignItems = "center"><Text>No Upcoming Events!</Text></View>
		}
		else {list = []
		for(key in events){

			list.push(
				<EventDisplay 
				title={key}
				location={events[key].location}
				time={events[key].time}
				date={events[key].date}
				link={events[key].link}
				alarm_year={events[key].alarm_year}
				alarm_month={events[key].alarm_month}
				alarm_day={events[key].alarm_day}
				alarm_hour={events[key].alarm_hour}
				alarm_min={events[key].alarm_min}
				remindMe={this.props.remindMe}
				/>
				)
			}
		}
		return <View>{list}</View>
	}

	render () {
		return (
				<ScrollView marginTop = {10}>
					{this.renderEvents()}
				</ScrollView>
			)
	}
}

const mapStateToProps = state =>{
	const { events } = state.eventList
	return { events }
}

export default connect(mapStateToProps, { readEvents, remindMe })(EventList)