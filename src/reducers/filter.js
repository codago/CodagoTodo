import {SET_VISIBILITY_FILTER, VisibilityFilters} from '../actions/actionTypes'

export default function visibilityReducer(state = VisibilityFilters.ALL, action = {}){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
