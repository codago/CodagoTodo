import * as actions from '../actions/actionTypes'
import _ from 'lodash'

export default function todosReducer(todos = [], action = {}){
  switch (action.type) {
    case actions.ADD:
    return [...todos, action.todo]
    default:
    return todos;
  }
}
