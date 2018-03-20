import React from 'react';
import { StyleSheet, Text, Dimensions, View, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';

import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class Favorites extends React.Component {

  state={
    imageNumber:6
  }

  displayImages(){
    var imageArr = []


    for(i = 0; i < this.state.imageNumber; i++){
      imageArr.push(<Image
          style={styles.image}
          source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
        />)
    }

    console.log(imageArr);

    return(
      imageArr
    )
  }

  render() {
    
    return(
      <View style={styles.container}>
        <View style={styles.gridContainer}>
          <TouchableOpacity

            >

          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D24D57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingHorizontal:20
  },
  image:{
    width:100,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'black'
  }
});
