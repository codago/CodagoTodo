import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class TitleBar extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {activeFilter, showModal} = this.props
    return(
      <View style={styles.toolbar}>
      <Text style={styles.button}></Text>
      <Text style={styles.title}>{activeFilter} Todos</Text>
      <TouchableOpacity style={styles.button} onPress={showModal}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  button: {
    width: 50
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
