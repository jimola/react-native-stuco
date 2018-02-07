import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class MyList extends React.Component {

  state = {
    list:[]
  }

  componentWillMount(){

  }

  render() {
    return (
      <View style={styles.container}>
        <List style={styles.list}>
          {
            this.props.list.map((item, i) => (
              <ListItem
                title={item.name}
                subtitle={item.job}
                rightTitle={`Age: ${item.age}`}
                leftIcon={{name:item.icon}}
                rightIcon={{name:'delete'}}
                onPressRightIcon={() => this.props.deleteItem(i)}
                key={i}
              />
            ))
          }
        </List>

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
