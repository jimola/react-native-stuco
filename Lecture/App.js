import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import { StackNavigator } from 'react-navigation';


import Home from './app/screens/Home';
import Login from './app/screens/Login';

export default class App extends React.Component {
  render() {
    return(
      <AppNavigator/>
    )
  }
}




const AppNavigator = StackNavigator({
  home:{
    screen: Home
  },
  login:{
    screen: Login
  }
},
{
  headerMode:'none'
})
