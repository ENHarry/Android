import React from 'react';
import {Text, View, Linking, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {CardSection, Button, ButtonCont, LinkButton, DeleteButton, ClickEmail,ExitButton} from '../../Components/Common';

const renderButton = (canDelete, jobKey, jobDelete, onReturn, visible) => {  


  closeModal = (jobkey) => {
    jobDelete(jobkey)
    onReturn()
  }

  if(canDelete)
    return(
      <View borderTopWidth = {StyleSheet.hairlineWidth}>
        <DeleteButton onPress={() => { closeModal(jobKey) }}>
          Delete
        </DeleteButton>
      </View>
    )
}

const showLinkButton = (jobBoard, jobKey) => 
{
    if(!jobBoard.hasOwnProperty(jobKey)) {
      return
    } 
    else if(jobBoard[jobKey].link === '') {
      return
    }
    else {
      return (
        <LinkButton jobBoard={jobBoard} jobKey={jobKey}>Learn more</LinkButton>
      )
  }
}

const showEmailButton = (jobBoard, jobKey) => 
{
    if(!jobBoard.hasOwnProperty(jobKey)) {
      return
    } 
    else if(jobBoard[jobKey].contact === '') {
      return
    }
    else {
      return (
        <ClickEmail onPress={() => Linking.openURL('mailto:{`${jobBoard[jobKey].contact`}')}>
            {`${jobBoard[jobKey].contact}`}
        </ClickEmail>
      )
  }
}



const JobDisplay = ({jobBoard, jobKey, canDelete, jobDelete, onReturn, visible}) => {
  if(jobBoard === null) {
    return null
  }
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <ExitButton onPress={() => {onReturn()} }>
          Close
        </ExitButton>
      </View>
      <View style = {styles.titleandname}>
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.titleStyle}>{`${jobBoard[jobKey].title}`}</Text>:<Text></Text>}
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.nameStyle}>{`${jobBoard[jobKey].name}`}</Text>:<Text></Text>}
      </View>
      
      <View style = {styles.desc}>
        {jobBoard.hasOwnProperty(jobKey) ? <Text style = {styles.descStyle}>{jobBoard[jobKey].description}</Text>:<Text></Text>}
      </View>
      
      <View style = {styles.contactCont}>
        {showEmailButton(jobBoard,jobKey)}     
      </View>  
      
      {showLinkButton(jobBoard, jobKey)}
      {canDelete ? renderButton(canDelete, jobKey, jobDelete, onReturn, visible):<Text></Text>}

    </View>
  )
}

const styles = {
  titleandname: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10
  },
  desc: {
    marginTop: 10
  },
  contactCont: {
    marginTop: 20,
    marginBottom: 20
  },
	textStyle: {
		fontSize: 14,
		fontWeight: 'bold'
	},
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'GillSans'
  },
  nameStyle: {
    fontSize: 18,
    fontFamily: 'GillSans-Light'
  },
  descStyle: {
    fontSize: 16,
    fontFamily: 'GillSans-Light'
  },
  contactStyle: {
    fontSize: 16,
    fontFamily: 'GillSans-Light'
  }
}

export {JobDisplay}