import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//Custom button component
const ExitButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    //any component or tag inside Button will be displayed as text
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
  //width sets width of button
  container: {
    flexDirection: 'row',
    width: 40,
    // height: 20,
    marginBottom: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 14,
    fontWeight: '200',
    // padding: 8
  },
  //borderRadius rounds-out corners of button
  buttonStyle: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'black',
    
  }
};

export { ExitButton };