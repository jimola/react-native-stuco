import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import { TabNavigator,StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './app/screens/Home';
import Login from './app/screens/Login';
import Favorites from './app/screens/Favorites';
import Settings from './app/screens/Settings';
import Details from './app/screens/Details';

export default class App extends React.Component {
  render() {
    return(
      <AppNavigator/>
    )
  }
}


const HomeStack = StackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: Details
  }
},
{
  headerMode:'none'
})





const AppNavigator = TabNavigator({
  home:{
    screen: HomeStack,
    navigationOptions:{
      tabBarIcon: <Icon name='dehaze' size={30} color='black'/>
    }
  },
  login:{
    screen: Login,
    navigationOptions:{
      tabBarIcon: <Icon name='dehaze' size={30} color='black'/>
    }
  },
  favorites: {
    screen: Favorites,
    navigationOptions:{
      tabBarIcon: <Icon name='dehaze' size={30} color='black'/>
    }
  },
  settings: {
    screen: Settings,
    navigationOptions:{
      tabBarIcon: <Icon name='dehaze' size={30} color='black'/>
    }
  }
},
{
  tabBarOptions:{
    activeTintColor:'red'
  },
  headerMode:'none',
  swipeEnabled: true,

})
