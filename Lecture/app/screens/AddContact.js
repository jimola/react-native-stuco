import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text} from 'react-native';

import { NavigationActions, Navigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header.js'
import * as firebase from 'firebase';

export default class AddContact extends React.Component {


  state={
    job: '', name: '', bio: '', icon: '', age: 0
  }


  pushData(){
    data = this.state
    if (data.name && data.age && data.bio && data.job && data.job){
      firebase.database().ref(`users/${this.state.name}`).set({
        data: this.state
      })
    } else {
      alert('Fill out all fields!')
    }



  }


  render() {
    return(
      <View style={styles.container}>
        <Header title='AddContact' navigation={this.props.navigation}/>
        <View style={styles.body}>
          <TextInput style={styles.input}
            placeholder='Name'
            height={40}
            onChangeText={(text) => this.setState({name: text})}
          />
          <TextInput style={styles.input}
            placeholder='Icon'
            height={40}

            onChangeText={(text) => this.setState({icon: text})}
          />
          <TextInput style={styles.input}
            placeholder='Job'
            onChangeText={(text) => this.setState({job: text})}
          />
          <TextInput style={styles.input}
            placeholder='Bio'
            onChangeText={(text) => this.setState({bio: text})}
          />
          <TextInput style={styles.input}
            placeholder='Age'
            keyboardType='numeric'
            onChangeText={(text) => this.setState({age: text})}
          />
          <TouchableOpacity
            onPress={() => this.pushData()}>
            <Text> Submit </Text>

          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC644B',
  },
  body: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  input: {}
});
