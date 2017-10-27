import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Provider} from 'react-redux'
import store from './src/store'
import TodoApp from './src/components/TodoApp'


export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
      <TodoApp />
      </Provider>
    )
  }
}
