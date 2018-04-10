import React from 'react'
import { connect } from 'react-redux'
import { addList, delList, updList } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
        <input
          ref={node => {
            input = node
          }}
        />
        <button onClick={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return
            }
            dispatch(updList(input.value))
            input.value=''
        }}>
          修改
        </button>
        <button onClick={e => {
            e.preventDefault();
            dispatch(addList(Math.random(), "新数据"))
        }}>
          添加
        </button>
        <button onClick={e => {
            e.preventDefault();
            dispatch(delList())
        }}>
          删除
        </button>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo