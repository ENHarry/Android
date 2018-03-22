import React, {Component} from 'react';
import {View, Text, Picker, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Card, CardSection, Input} from '../../Components/Common';
import {connect} from 'react-redux';
import {jobUpdate} from '../../Actions';

class JobForm extends Component{
  render(){
    return (
      <ScrollView>
        <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset="0">
          <View style = {styles.containerStyle}>
          <Input 
            label="Job Title"
            placeholder="title/position"
            value={this.props.title}
            onChangeText={text => this.props.jobUpdate({prop: 'title', value: text})}
          />
          </View>
        
          <View style = {styles.containerStyle}>
          <Input 
            label="Business/Name:"
            placeholder="your business/name here"
            value={this.props.name}
            onChangeText={text => this.props.jobUpdate({prop: 'name', value: text})}
          />
          </View>
        
          <View style = {styles.containerStyle}>
          <Input
            label="Description:"
            placeholder="Lookin' for..."
            value={this.props.description}
            onChangeText={text => this.props.jobUpdate({prop: 'description', value: text})}
            multiline = {true}
            height = {60}
            maxLength = {550}
          />
          </View>

          <View style = {styles.containerStyle}>
          <Input 
            label="Email:"
            placeholder="user@user.com"
            value={this.props.contact}
            onChangeText={text => this.props.jobUpdate({prop: 'contact', value: text})}
          />
          </View>

          <View style = {styles.containerStyle}>
          <Input 
            label="Link:"
            placeholder="http://..."
            value={this.props.link}
            onChangeText={text => this.props.jobUpdate({prop: 'link', value: text})}
          />
          </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
  }
}

const styles = ({
  containerStyle: {
    //borderBottomWidth: 2,
    //padding: 10,
    flexDirection: 'row',
    /*backgroundColor: '#fff',
    //justifyContent: 'space-around',
    borderColor: 'black',
    position: 'relative',*/
  },
  pickerTextStyle:{
    fontSize: 18,
    paddingLeft: 23
  },
  itemStyle:{
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pickerStyle:{
    //flex:1, 
    //width: 100,
    //height: 200
  }
});
 
mapStateToProps = (state) => {
  const {title,contact,description,category, link} = state.jobForm
  return {title,contact,description,category, link}
}

export default connect(mapStateToProps, {jobUpdate})(JobForm)