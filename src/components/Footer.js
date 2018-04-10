import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      所有数据
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_UPDATED">
      已更新数据
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_DELETED">
      已删除数据
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_RAW_DATA">
      未改变数据
    </FilterLink>
  </p>
)

export default Footer