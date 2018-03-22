import React, {PureComponent} from 'react';
import {Text, View,StyleSheet, ScrollView, ViewPagerAndroid, Linking} from 'react-native';
import {connect} from 'react-redux'

import ViewContainer from '../../Components/Common/ViewContainer';
import NavBar from '../../Components/Header/NavBar';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import UpdateList from './UpdateList';
import EventList from './EventList';
import {Header} from '../../Components/Common'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import TabbedViewPager from 'react-native-tabbed-view-pager-android';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {readUpdates} from '../../Actions'
import {ClickEmail, Spinner} from '../../Components/Common'


var radio_props = [
  {label: 'Updates    ', value: 0 },
  {label: 'Events', value: 1 }
];

class Homescreen extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
    display: 0
    }
  }
  componentWillMount(){
    this.props.readUpdates()
  }

  getInitialState(){
    return {
      display: 0,
    }
  }

  checkLoading(){
    if(this.props.loading) {
      return (
        <View style={{paddingTop: 40}}>
          <Spinner size='large'/>
        </View>
      )
    }else {
      return(
				  this.state.display===0 ? <UpdateList /> : <EventList />
      )
    }

  }

  render() {
    return (
      <ViewContainer>
				<NavBar />
        <View style = {{alignItems: 'center'}}>
        <ClickEmail onPress = {() => Linking.openURL('https://goo.gl/forms/Gv0ZJiEMQbzauTOo1')}>
          <Text style = {styles.feedbackText}>Leave us feedback by clicking here!</Text>
        </ClickEmail>
        <RadioForm
          radio_props={radio_props}
          initial={0}
					formHorizontal={true}
					labelHorizontal={true}
					buttonColor={'#800000'}
					animation={true}
          onPress={(display) => {this.setState({display:display})}}
        >
				</RadioForm>

				</View>
        <View>
          {this.checkLoading()}
        </View>
      </ViewContainer>
    );
  }
}


const styles = {
    feedbackText: {
        fontSize: 20,
        textAlign: 'center'
    }
}


mapStateToProps = state => {
  const {loading} = state.updateList
  return {loading}
}

export default connect(mapStateToProps,{readUpdates})(Homescreen)