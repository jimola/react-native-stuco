import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Platform, TextInput, ActivityIndicator } from 'react-native';

import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';

import * as firebase from 'firebase';

export default class Login extends React.Component {

  state = { email: '', password: '', error: '', loading: false };

  



  goToHome(){
    // this.props.navigation.navigate('home')
    this.props.navigation.dispatch(NavigationActions.back())
  }



  resetToHome(){
    return this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    }));
  }




    render() {
      return (
        <View style={styles.container}>
          <Header title={'Login'}
          navigation={this.props.navigation}/>
          <View style={styles.mainContainer}>
            <TextInput
                label='Email Address'
                placeholder='you@domain.com'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
            />
            <TextInput
                label='Password'
                autoCorrect={false}
                placeholder='*******'
                secureTextEntry
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
            />
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => this.onLoginPress()}>
              <Text style={styles.submitText}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => this.onLogoutPress()}>
              <Text style={styles.submitText}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  const styles = {
    container:{
      flex:1,
      justifyContent:'center'
    },
    mainContainer:{
      flex:1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBtn:{
      borderWidth:2,
      borderColor:'navy',
      height:40,
      width:150,
      justifyContent:'center',
      alignItems:'center'
    },
    logoutBtn:{
      borderWidth:2,
      borderColor:'#f92222',
      height:40,
      width:150,
      justifyContent:'center',
      alignItems:'center'
    },
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
  };
