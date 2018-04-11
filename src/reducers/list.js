const list = (state = {filter:'SHOW_ALL',list:[]}, action) => {
    switch (action.type) {
      case 'CHOOSE_ITEM':
            if(state.filter === 'SHOW_ALL'){
                return Object.assign({}, state, {id: action.id})
            } else {
                return state
            }          
      case 'ADD_LIST':
      console.log(state)
        return Object.assign({}, state, {list:[
          ...state.list,
          {
            id: action.id,
            content: action.content,
            is_raw_data: true,
            is_deleted: false,
            is_updated: false
          }
        ]})
      case 'UPD_LIST':
      console.log(state)
        return Object.assign({}, state, { list: state.list.map(item =>
          (item.id === state.id) 
            ? {id:item.id, is_deleted:item.is_deleted, is_updated: true, is_raw_data: false, content: action.content}
            : item
        )})
      case 'DEL_LIST':
      console.log(state)
        return Object.assign({}, state, {list:state.list.map(item =>
          (item.id === state.id && item.is_deleted === false)?{id:item.id, is_deleted:true, is_updated: item.is_updated, is_raw_data: item.is_raw_data, content: item.content+'(已删除)'}:item
        )})
      default:
        return state
    }
  }
  
  export default list