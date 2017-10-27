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
    const {activeFilter} = this.props
    return(
      <View style={styles.toolbar}>
      <Text style={styles.button}></Text>
      <Text style={styles.title}>{activeFilter} Todos</Text>
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
    width: 0
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
