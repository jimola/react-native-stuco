import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';


export default class Login extends React.Component {

  goToHome(){
    // this.props.navigation.navigate('home')
    this.props.navigation.dispatch(NavigationActions.back())
  }

  resetToHome(){
    return this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: 'home'})
      ]
    }));
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>
          Login Page
        </Text>
        <TouchableOpacity
          style={styles.goToHome}
          onPress={() => this.goToHome()}>
          <Icon name='arrow-back' size={30} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goToHome}
          onPress={() => this.resetToHome()}>
          <Icon name='home' size={30} color='white'/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
