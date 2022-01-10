import React from 'react'
import { useDesktop } from '../../../contexts/desktop'
import './index.sass'


const Icon = ({ name, icon }, index) => {
  const { openApp } = useDesktop()

  const handleDoubleClick = () => openApp(name)

  const handleClick = () => window.innerWidth < 750 && openApp(name)

  return (
    <div
      className='icon'
      onDoubleClick={handleDoubleClick}
      onPointerDown={handleClick}
      key={index}
    >
      <img src={icon} alt={name} className='icon__image'/>

      {name}
    </div>
  )
}

export default Icon