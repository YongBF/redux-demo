import React from 'react'

const Item = ({ onClick, content }) => (
  <li
    onClick={onClick}
  >
    {content}
  </li>
)

export default Item