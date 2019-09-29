// import Ionicons from 'react-native-vector-icons/Ionicons';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';

import React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{marginBottom: -3}}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
