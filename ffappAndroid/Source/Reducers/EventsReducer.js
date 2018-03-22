import {EVENTS_FETCH_SUCCESS, NOT_SET_SUCCESS} from '../Actions/types'

const INITIAL_STATE = {
  events: {}
}

export default (state = INITIAL_STATE, action) => {
  
  switch(action.type) {

    case EVENTS_FETCH_SUCCESS:
    console.log(action.payload)
      return {...state, events: action.payload}
    case NOT_SET_SUCCESS:
      console.log("NOT_SET_SUCCESS")
      return {...state}
    default:
      return {...state}
  }
}