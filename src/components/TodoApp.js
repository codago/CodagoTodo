import React, {Component} from 'react'
import {StyleSheet, View, Modal} from 'react-native'
import {bindActionCreators, dispatch} from 'redux'
import * as todoActions from '../actions/todoActions'
import * as filterActions from '../actions/filterActions'
import * as modalActions from '../actions/modalActions'
import {connect} from 'react-redux'
import TodoList from './TodoList'
import TitleBar from './TitleBar'
import Filters from './Filters'
import AddTodo from './AddTodo'
import {VisibilityFilters} from '../actions/actionTypes'

class TodoApp extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {todos, filter, modal, todoActs, filterActs, modalActs} = this.props
    console.log(todos, "todos");
    return(
      <View style={styles.container}>
      <TitleBar activeFilter={filter} {...modalActs}/>
      <TodoList todos={todos} activeFilter={filter} {...todoActs} />
      <Filters activeFilter={filter} {...filterActs} />
      <Modal transparent={false} visible={modal} onRequestClose={()=>{alert("modal has been closed.")}}>
        <AddTodo {...todoActs} {...modalActs} />
      </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  list: {
    flex: 1
  },
  add: {
    flex: 1
  }
})

function mapStateToProps(state){
  return{
    todos: state.todos.filter(todo => {
      if(state.filter === VisibilityFilters.ALL){
        return true
      }else if(state.filter === VisibilityFilters.COMPLETED){
        return todo.completed;
      }
      else if(state.filter === VisibilityFilters.INCOMPLETE){
        return !todo.completed;
      }
    }),
    filter: state.filter,
    modal: state.modal.visible
  }
}

function mapDispatchToProps(dispatch){
  return{
    todoActs: bindActionCreators(todoActions, dispatch),
    filterActs: bindActionCreators(filterActions, dispatch),
    modalActs: bindActionCreators(modalActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
