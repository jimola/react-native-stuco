import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class MyList extends React.Component {

  state = {
    list:[]
  }

  componentWillMount(){
    this.setState({list:[
      {
        title: 'Appointments',
        icon: 'av-timer'
        },
        {
        title: 'Trips',
        icon: 'flight-takeoff'
      }
    ]

    })
  }

  deleteItem(i){
    var newList = this.state.list
    newList.splice(i,1)
    this.setState({list:newList})
  }

  render() {
    return (
      <View style={styles.container}>
        <List style={styles.list}>
          {
            this.state.list.map((item, i) => (
              <ListItem
                title={item.title}
                leftIcon={{name:item.icon}}
                rightIcon={{name:'delete'}}
                onPressRightIcon={() => this.deleteItem(i)}
                key={i}
              />
            ))
          }
        </List>
        <TouchableOpacity>
          <Icon name='refresh' size={30} color='white'/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list:{
    flex:1,
    // height:300,
    backgroundColor:'gray'
  }
});
