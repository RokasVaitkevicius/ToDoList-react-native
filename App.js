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
  ScrollView,
  TextInput,
  Button,
  Alert
} from 'react-native';
import Todo from './src/components/todo'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor() {
    super()
    this.state = {
        todo: '',
        todos: ['Make a sandwich', 'Go home', 'hahah']
    }
    this._onPressButton = this._onPressButton.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  _onPressButton() {
    this.setState(prevState => ({todos: [...prevState.todos, this.state.todo]}))
  }

  removeTodo(i, e) {
    this.state.todos.slice(i, 1)    
    this.setState(prevState => ({todos: prevState.todos}))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
        <TextInput 
          onChangeText={(text) => this.setState({todo:text})}
          placeholder="Add something to list.." 
        />
        <Button title="Add"
          color="#841584"
          onPress={this._onPressButton}
        />
        </View>
        <View style={styles.list}>
        <ScrollView>
          {this.state.todos.map((todo, i) => 
          <Todo 
            todo={todo} 
            key={i} 
            removeTodo={e => this.removeTodo(i, e)}
          />)}
        </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 2
  },
  input: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-end'
  },
  container: {
    marginTop:60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
