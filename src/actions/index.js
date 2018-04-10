export const addList = (id, content) => {
  return {
    type: 'ADD_LIST',
    content,
    id
  }
}

export const chooseItem = id => {
  return {
    type: 'CHOOSE_ITEM',
    id
  }
}
  
export const delList = () => {
  return {
      type: 'DEL_LIST'
    }
  }
  
  export const updList = content => {
    return {
      type: 'UPD_LIST',
      content
    }
  }
  
  export const setVisibilityFilter = filter => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
  }