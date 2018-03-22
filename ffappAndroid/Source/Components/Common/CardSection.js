import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 2,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: 'black',
    position: 'relative',
  }
};

export { CardSection };