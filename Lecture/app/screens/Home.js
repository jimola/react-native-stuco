import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';
import MyList from '../components/list';

import * as firebase from 'firebase';

export default class Home extends React.Component {

  state={
    loading:true,
    list:[]
  }

  componentWillMount(){
    this.fetchData()
  }

  componentDidMount(){

  }

  fetchData(){
    var that = this;
    that.setState({loading:true})
    var tempList = []
    firebase.database().ref(`users/`).once('value', (snap)=> {
      snap.forEach(function(data) {
        let result = data.val();

        tempList.push(result);
        //console.log(data.key,"reg reg init")
      })
    }).then(function(){
      that.setState({list:tempList}, ()=>that.setState({loading:false}))
    })
  };






  deleteItem(i){
    var newList = this.state.list
    newList.splice(i,1)
    this.setState({list:newList})
  }

  goToLogin(){
    this.props.navigation.navigate('login')
  }

  goToDetails(item){
    console.log(item);
    this.props.navigation.navigate('Details', {...item})


    //Push to firebase
    // firebase.database().ref(`users/${item.name}`).update({
    //   data: item
    // });


  }

  render() {
    return (
      <View style={styles.container}>



        <Header navigation={this.props.navigation}/>
        <View style={styles.body}>
          {this.state.loading ?
            <ActivityIndicator style={styles.loadIcon}
              color='#f92222' size='large'
            />
            :
            <ScrollView style={styles.scroll}>
              <MyList
                list={this.state.list}
                deleteItem={(i)=>this.deleteItem(i)}
                refreshList={()=>this.fetchData()}
                goToDetails={(item)=>this.goToDetails(item)}
              />
          </ScrollView>}
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
    // flex:2,
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
  },
  loadIcon:{
    flex:1,
  }
});
