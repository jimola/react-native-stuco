import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';

import { TabNavigator, StackNavigator, DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './app/screens/Home';
import Login from './app/screens/Login';
import Favorites from './app/screens/Favorites';
import Settings from './app/screens/Settings';
import Details from './app/screens/Details';
import Location from './app/screens/Location';
import CustomMenu from './app/screens/CustomMenu';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBFywbT7cacSLNAiszUq77s54SuuKzUE-o",
  authDomain: "stuco1-f156a.firebaseapp.com",
  databaseURL: "https://stuco1-f156a.firebaseio.com",
  projectId: "stuco1-f156a",
  storageBucket: "stuco1-f156a.appspot.com",
  messagingSenderId: "106157953476"
};
firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return(
      <AppDrawerNavigator/>
    )
  }
}

const CustomDrawerContentComponent = (props) => (

  <ScrollView style={styles.scroll}>
    <View style={styles.topView}>
      <Image style={styles.Trump} source={require('./images/DonaldTrump.jpg')}/>
      <Text style={styles.name}>
        Donald Trump
      </Text>
    </View>

    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Text style={styles.appName}>
        App Name
      </Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  topView: {
    height: 200,
    // flex:1,
    // backgroundColor: 'red',
    justifyContent:'center',
    alignItems: 'center'
  },
  scroll:{
    flex:1,
    // backgroundColor:'blue'
  },
  Trump: {
    height:100,
    width:100,
    borderRadius: 50
    // flex:1

  },
  appName:{
    alignSelf:'center',
    paddingBottom: 10
  },
  name: {
    paddingTop:12,
    fontSize: 16,
    fontWeight:'800',
    fontStyle: 'italic'
  }

});






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


const AppDrawerNavigator = DrawerNavigator({
  AppNavigator: {
    screen: AppNavigator,
    navigationOptions:{
      drawerIcon: <Icon name='dehaze' size={25} color='black'/>
    }
  },
  Location: {
    screen: Location,
    navigationOptions:{
      drawerIcon: <Icon name='search' size={25} color='black'/>
    }
  },
  Settings: {
    screen: Location,
    navigationOptions:{
      drawerIcon: <Icon name='settings' size={25} color='black'/>
    }
  },
  Help: {
    screen: Location,
    navigationOptions:{
      drawerIcon: <Icon name='search' size={25} color='black'/>
    }
  }
}, {
    contentOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {fontFamily:'Helvetica Neue'}
  },
  drawerBackgroundColor:'red',
  contentComponent: CustomDrawerContentComponent
}
)
