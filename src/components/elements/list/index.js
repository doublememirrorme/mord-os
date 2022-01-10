import React from 'react'
import './index.sass'

const List = ({ children }, index) => (
  <ul className='list'>
    {children}
  </ul>
)

export default List