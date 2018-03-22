import {JOB_UPDATE, JOB_CREATE, JOBS_FETCH_SUCCESS, JOB_DELETE} from '../Actions/types'

const INITIAL_STATE = {
  name: '',
  contact: '',
  description: '',
  title: '',
  user: '',
  date: '',
  error: '',
  link: '',
  jb: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case JOB_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value}
    case JOB_CREATE:
      return {...state, name:'', contact:'', description: '', title: '', user: '', date: '', link: '', jb: action.payload}
    case JOBS_FETCH_SUCCESS:
      return {...state, jb: action.payload}
    case JOB_DELETE:
      return {...state, jb: action.payload}
    default:
      return state
  }
}
