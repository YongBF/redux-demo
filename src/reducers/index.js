import { combineReducers } from 'redux'
import list from './list'
import visibilityFilter from './visibilityFilter'

const listApp = combineReducers({
  list,
  visibilityFilter
})

export default listApp