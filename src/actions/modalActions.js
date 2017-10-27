import {SET_ADD_MODAL_VISIBILITY} from './actionTypes'

export function showModal(){
  return{
    type: SET_ADD_MODAL_VISIBILITY,
    visible: true
  }
}

export function hideModal(){
  return{
    type: SET_ADD_MODAL_VISIBILITY,
    visible: false
  }
}
