import React, {Component} from 'react'
import {
  StyleSheet, View, TextInput
} from 'react-native'

export default class AddTodoRow extends Component{
  constructor(props){
    super(props)
    this.state = {
      focused: false,
      value: null
    }
  }

  onSubmit = () => {
    this.props.addTodo(this.state.value)
  }

  onText = (text) => {
    this.setState({value: text})
  }

  onFocused = () => {
    this.setState({focused: true})
  }

  onBlurred = () => {
    this.setState({focused: false})
  }

  renderBorder = () => {
    if(this.state.focused){
      return(
        <View style={styles.border}></View>
      )
    }
  }

  render(){
    return(
      <View style={styles.row}>
      <TextInput style={styles.input}
      onChangeText={this.onText}
      onSubmitEditing={this.onSubmit}
      onFocus={this.onFocused}
      onBlur={this.onBlurred}
      placeholder="Add a new todo..."></TextInput>
      {this.renderBorder()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 10
  },
  input: {
    height: 40,
    flex: 1
  },
  border: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray'
  }
})
