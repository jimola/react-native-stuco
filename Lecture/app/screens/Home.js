import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';
import MyList from '../components/list';

export default class Home extends React.Component {

  state={
    list:[]
  }

  componentWillMount(){
    this.fetchData()
  }

  fetchData(){
    return fetch('https://api.myjson.com/bins/qwwrt')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({list: responseJson.list})
    })
    .catch((error) => {
      console.error(error);
    });

  }

  deleteItem(i){
    var newList = this.state.list
    newList.splice(i,1)
    this.setState({list:newList})
  }

  goToLogin(){
    this.props.navigation.navigate('login')
  }

  render() {
    return (
      <View style={styles.container}>

        <Header/>
        <View style={styles.body}>
          <ScrollView style={styles.scroll}>
            <MyList list={this.state.list}
              deleteItem={(i)=>this.deleteItem(i)}
              refreshList={()=>this.fetchData()}
            />
          </ScrollView>
          <View style={styles.fetchContainer}>
            <TouchableOpacity
              style={styles.fetchButton}
              onPress={() => this.fetchData()}>
              <Icon name='vertical-align-bottom' size={30} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.goToLogin}
              onPress={() => this.goToLogin()}>
              <Icon name='arrow-forward' size={30} color='white'/>
            </TouchableOpacity>
          </View>
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
  fetchContainer:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  body:{
    flex:1,
    backgroundColor: 'gray',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  fetchButton:{
    width:200,
    backgroundColor:'#aea8d3',
    alignItems:'center',
  },
  goToLogin:{
    width:200,
    backgroundColor:'red',
    alignItems:'center',
  },
  scroll:{
    flex:1,
    backgroundColor:'gray'
  }
});
