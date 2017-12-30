/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Todo extends Component {
  render() {
    return (
      <View style={styles.todo}>
        <Text style={styles.text}>TODO: {this.props.todo} </Text>
        <Button style={styles.button}
          title="X" 
          color="red"
          onPress={this.props.removeTodo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  button: {
    //flex: 1
  },
  text: {
    //flex: 4
  }
});
