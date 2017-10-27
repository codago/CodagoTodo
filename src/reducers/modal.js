import {SET_ADD_MODAL_VISIBILITY} from '../actions/actionTypes'

const initialState = {
  visible: false
}

export default function modalReducer(state = initialState, action = {}){
  switch (action.type) {
    case SET_ADD_MODAL_VISIBILITY:
      return {
        visible: action.visible
      }
    default:
      return state
  }
}
