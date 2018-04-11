import { connect } from 'react-redux'
import { chooseItem } from '../actions'
import ItemList from '../components/ItemList'

const getVisibleList = (list, filter) => {
  switch (filter) {
    case 'SHOW_UPDATED':
      return list.list.filter(t => t.is_updated)
    case 'SHOW_DELETED':
      return list.list.filter(t => t.is_deleted)
    case 'SHOW_RAW_DATA':
      return list.list.filter(t => t.is_raw_data)
    case 'SHOW_ALL':
    default:
      return list.list
  }
}

const mapStateToProps = state => {
  return {
    list: getVisibleList(state.list, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: (id) => {
      dispatch(chooseItem(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleTodoList