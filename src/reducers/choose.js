const choose = (state = {},action) => {
    switch(action.type){
        case 'CHOOSE_ITEM':
            if(state.filter === 'SHOW_ALL'){
                return action.id
            } else {
                return state
            }          
        default:
            return state
    }
}

export default choose