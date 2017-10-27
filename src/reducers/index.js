import todosReducer from './todos'
import filterReducer from './filter'
import modalReducer from './modal'

const reducers = {
  todos: todosReducer,
  filter: filterReducer,
  modal: modalReducer
}

export default reducers
