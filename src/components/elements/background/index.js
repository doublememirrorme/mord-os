import React from 'react'
import './index.sass'

const Background = ({children}) => (
  <div style={{ backgroundImage: `url("/background.jpg")` }} className='background'>
    {children}
  </div>
)

export default Background