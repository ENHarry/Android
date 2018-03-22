import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

import FFBusPanel from './FFBusPanel';

const styles = StyleSheet.create({
  descStyle: {
    fontSize: 16,
    fontFamily: 'GillSans',
  },
});

const FFBusRow = (props) => (
  <FFBusPanel FFBusid = {`${props.id}`} FFBusname = {`${props.name}`}>
  
  <Text style = {styles.descStyle}>{`${props.desc}`}</Text>
  
  </FFBusPanel>
);

export default FFBusRow;