import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Login extends React.Component {

  goToHome(){
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Login Screen
        </Text>
        <TouchableOpacity onPress={() => this.goToHome()}>
          <Icon name='arrow-back' size={30} color='white'/>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'white'
  }
});
