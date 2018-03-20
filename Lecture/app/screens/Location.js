import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Platform } from 'react-native';

import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';


export default class Location extends React.Component {

  render() {
    return(
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
