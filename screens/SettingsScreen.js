import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Settings Screen</Text>
      </View>
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
});
