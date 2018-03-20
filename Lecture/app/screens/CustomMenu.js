import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';


export default class CustomMenu extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <List>
          {
            this.props.list.map((item, i) => (
              <ListItem
                title={item.name}
                subtitle={item.job}
                rightTitle={`Age: ${item.age}`}
                leftIcon={{name:item.icon}}
                rightIcon={{name:'delete'}}
                onPress={()=> this.props.goToDetails(item)}
                onPressRightIcon={() => this.props.deleteItem(i)}
                key={i}
              />
            ))
          }
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
