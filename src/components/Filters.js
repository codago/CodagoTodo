import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native'

import {VisibilityFilters} from '../actions/actionTypes'

export default class Filters extends Component{
  constructor(props){
    super(props)
  }

  renderFilters = () => {
    const {showAll, showCompleted, showIncomplete, activeFilter} = this.props
    return [
      {name: VisibilityFilters.ALL, action: showAll},
      {name: VisibilityFilters.COMPLETED, action: showCompleted},
      {name: VisibilityFilters.INCOMPLETE, action: showIncomplete}
    ].map(filter => {
      let style = [styles.button]
      if(activeFilter === filter.name){
        style.push(styles.current)
      }
      return(
        <TouchableOpacity
        key={filter.name}
        style={style}
        onPress={filter.action}>
        <Text style={styles.text}>{filter.name}</Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return(
      <View style={styles.bar}>
        {this.renderFilters()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#81c04d',
    flexDirection: 'row'
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  current: {
    backgroundColor: '#70a743'
  }
})
