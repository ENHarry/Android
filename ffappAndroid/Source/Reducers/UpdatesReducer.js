import {UPDATES_FETCH_SUCCESS} from '../Actions/types'

const INITIAL_STATE = {
  loading: true,
  updates: {}
}

export default (state = INITIAL_STATE, action) => {
  
  switch(action.type) {
    case UPDATES_FETCH_SUCCESS:
      return {...state, loading: false, updates: action.payload}
    default:
      return {...state}
  }
}