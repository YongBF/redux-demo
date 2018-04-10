import { combineReducers } from 'redux'
import list from './list'
import choose from './choose'
import visibilityFilter from './visibilityFilter'

const listApp = combineReducers({
  list,
  choose,
  visibilityFilter
})

export default listApp