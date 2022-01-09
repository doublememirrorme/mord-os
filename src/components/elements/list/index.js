import React from 'react'
import ListItem from './item'

const List = ({ items = [] }, index) => (
  <ul>
    {items.map(() => <ListItem key={index} />)}
  </ul>
)

export default List