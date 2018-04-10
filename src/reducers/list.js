const list = (state = [], action) => {
    switch (action.type) {
      case 'ADD_LIST':
        return [
          ...state,
          {
            id: action.id,
            content: action.content,
            is_raw_data: true,
            is_deleted: false,
            is_updated: false
          }
        ]
      case 'UPD_LIST':
        return state.map(todo =>
          (todo.id === state.id) 
            ? {...todo, is_updated: true, is_raw_data: false, content: action.content}
            : todo
        )
      case 'DEL_LIST':
        return state.filter((item, index) => {
            return item.id !== state.id
        })
      default:
        return state
    }
  }
  
  export default list