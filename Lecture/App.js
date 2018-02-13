import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Home from './app/screens/Home';
import Login from './app/screens/Login';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from './app/components/header';
import MyList from './app/components/list';

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login
  }


  // Order: {
  //   screen: OrderStack,
  // },
}, {
  headerMode: 'none',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  fetchContainer:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  body:{
    flex:1,
    backgroundColor: 'gray',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  fetchButton:{
    width:200,
    backgroundColor:'#aea8d3',
    alignItems:'center',
  },
  scroll:{
    flex:1,
    backgroundColor:'gray'
  }
});
