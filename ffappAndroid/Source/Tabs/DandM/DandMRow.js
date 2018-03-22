import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

import DandMPanel from './DandMPanel';

const styles = StyleSheet.create({
  descStyle: {
    fontSize: 18,
    fontFamily: 'GillSans-Light',
  },
});

const DandMRow = (props) => (
  <DandMPanel DandMid = {`${props.id}`} DandMname = {`${props.name}`} DandMtitle = {`${props.title}`}>
  
  <Text style = {styles.descStyle}>{`${props.desc}`}</Text>
  
  </DandMPanel>
);

export default DandMRow;