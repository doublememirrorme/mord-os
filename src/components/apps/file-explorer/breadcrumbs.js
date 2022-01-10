import React from 'react'
import { useRootDirectory } from '../../../contexts/root-directory'
import './breadcrumbs.sass'

const Breadcrumbs = () => {
  const { breadcrumbs, setBreadcrumbs } = useRootDirectory()

  const handleClick = (index) => {
    setBreadcrumbs(breadcrumbs.slice(0, index + 1))
  }

  return (
    <div className='breadcrumbs'>
      {breadcrumbs?.map((crumb, index) => (
        <span
          className='breadcrumbs__crumb'
          onClick={() => handleClick(index)}
          key={index}
        >
          {crumb.name}
        </span>
      ))}
    </div>
  ) 
}

export default Breadcrumbs