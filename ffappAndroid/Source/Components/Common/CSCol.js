import React from 'react';
import { View } from 'react-native';

const CSCol = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 2,
    padding: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'column',
    borderColor: 'black',
    position: 'relative',
  }
};

export { CSCol };