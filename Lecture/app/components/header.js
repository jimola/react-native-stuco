import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.horizContainer}>
          <Icon name='dehaze' size={30} color='white'/>
          <Text style={styles.title}>
            App Title
          </Text>
          <Icon name='dehaze' size={30} color='white'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:100,
    backgroundColor: 'navy',
  },
  horizContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'white',
    fontSize:24
  }
});
