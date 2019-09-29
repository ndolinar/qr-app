import React from 'react';
import {Text} from 'react-native';

export function MonoText(props) {
  return <Text {...props} style={[props.style, styles.text]} />;
}

const styles = {
  text: {},
};
