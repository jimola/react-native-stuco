import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';


export default class Details extends React.Component {



  render() {
    const person = this.props.navigation.state.params;
    console.log(person);
    return(
      <View style={styles.container}>
        <Header title={person.name}
        navigation={this.props.navigation}/>
        <View style={styles.mainContainer}>
          <Image
            style={styles.image}
            // source={require('../../images/DonaldTrump.jpg')}
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
          />
          <Text style={styles.text}>
            {person.bio}
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:200,
    height:200,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'black'
  }
});
