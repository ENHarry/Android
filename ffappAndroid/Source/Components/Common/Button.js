import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <View style = {styles.container}>
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    //paddingTop: 5,
    //justifyContent: 'center',
    width: 250,
    marginBottom: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    padding: 8
  },
  buttonStyle: {
    flex: 1,
    
    backgroundColor: 'maroon',
    borderRadius: 5,
    //padding: 5,
    borderColor: 'black',
    
  }
};

export { Button };