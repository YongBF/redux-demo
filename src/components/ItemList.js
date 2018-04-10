import React from 'react'
import Item from './Item'

const ItemList = ({ list, onItemClick }) => (
  <ul>
    {list.map(item => (
      <Item key={item.id} {...item} onClick={() => onItemClick(item.id)} />
    ))}
  </ul>
)

export default ItemList