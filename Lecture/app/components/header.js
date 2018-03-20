import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Header extends React.Component {

  refreshPressed(){

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.horizContainer}>
          {this.props.title ?
            <TouchableOpacity
            onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
            >
              <Icon name='arrow-back' size={30} color='white'/>
            </TouchableOpacity>
            :
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name='menu' size={30} color='white'/>
            </TouchableOpacity>
          }

          <Text style={styles.title}>
            {this.props.title ? this.props.title : 'Home Title'}
          </Text>
          <Icon name='add' size={30} color='white'/>
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
    justifyContent:'space-between',
    paddingHorizontal:8,
    paddingTop:15
  },
  title:{
    color:'white',
    fontSize:24
  }
});
