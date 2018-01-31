import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from './app/components/header';
import MyList from './app/components/list';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Header/>
        <View style={styles.body}>
          <MyList/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    flex:1,
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
