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
import Modal from 'react-native-modal'

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
        todos: ['Make a sandwich', 'Go home', 'hahah'],
        isModalVisible: false
    }
    this._onPressButton = this._onPressButton.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
  }

  _onPressButton() {
    if(!this.state.todo) {
      return
    }
    this._textInput.setNativeProps({text: ''})
    this.setState(prevState => ({todos: [...prevState.todos, this.state.todo]}))
  }

  removeTodo(i, e) {
    console.log(`Removing: ${i}`)
    this.state.todos.splice(i, 1)
    console.log(this.state.todos)    
    this.setState(prevState => ({todos: prevState.todos}))
  }

  editTodo(i, e) {
    console.log(`Editing: ${i}`)
    this.state.todos.splice(i, 1)    
    this.setState(prevState => ({todos: prevState.todos}))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
        <TextInput
          ref={component => this._textInput = component}
          style={styles.textInput} 
          onChangeText={(text) => this.setState({todo:text})}
          placeholder="Add something to list.." 
        />
        <Button 
          style={styles.button}
          title="Add"
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
            editTodo={e => this.editTodo(i, e)}
          />)}
        </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 10
  },
  input: {
    margin: 20,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between'
  },
  container: {
    marginTop:60,
    flex: 1,
  },
  button: {
    flex: 1
  },
  textInput: {
    flex: 4
  }
});
