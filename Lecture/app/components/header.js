import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Header extends React.Component {

  refreshPressed(){

  }

  //Take out this ButtonType function to make work again

  render() {
    const ButtonType = function(){
      if (this.props.title){
        if (this.props.title == 'AddContact'){
          console.log('+')
          return (

            <TouchableOpacity
            onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
            >
              <Icon name='close' size={30} color='white'/>
            </TouchableOpacity>
          )
        } else {
          console.log('arrow');
          return(
            <TouchableOpacity
            onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
            >
              <Icon name='arrow-back' size={30} color='white'/>
            </TouchableOpacity>
          )
        }
      } else {
        console.log('menu');
        return (

          <TouchableOpacity
          onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
          >
            <Icon name='menu' size={30} color='white'/>
          </TouchableOpacity>
        )
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.horizContainer}>
          {ButtonType}

          <Text style={styles.title}>
            {this.props.title ? this.props.title : 'Home Title'}
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddContact')}
          >
            <Icon name='add' size={30} color='white'/>
          </TouchableOpacity>
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
    justifyContent:'center',
    paddingHorizontal:8,
    paddingTop:15
  },
  title:{
    color:'white',
    fontSize:24
  }
});
