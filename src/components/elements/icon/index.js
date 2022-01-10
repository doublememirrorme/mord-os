import React from 'react'
import { useDesktop } from '../../../contexts/desktop'
import './index.sass'


const Icon = ({ name, icon }, index) => {
  const { openApp } = useDesktop()

  const handleDoubleClick = e => openApp(name)

  return (
    <div className='icon' onDoubleClick={handleDoubleClick} key={index}>
      <img src={icon} alt={name} className='icon__image'/>

      {name}
    </div>
  )
}

export default Icon