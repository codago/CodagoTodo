import React, {Component} from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, TextInput
} from 'react-native'

export default class AddTodo extends Component{
  constructor(props){
    super(props)
    this.state = {value: null}
  }

  handleOnChange = (text) => {
    this.setState({value: text})
  }

  addTodo = () => {
    this.props.addTodo(this.state.value)
    this.setState({value: null})
  }

  render(){
    return()
  }
}
