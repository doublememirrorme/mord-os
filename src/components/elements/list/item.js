import React from 'react'
import classNames from 'classnames'
import './item.sass'

const ListItem = ({ icon, children, className, ...props }) => (
  <li className={classNames('list-item', className)} {...props}>
    {icon && (
      <img
        src={`/icons/${icon}`}
        width={16}
        height={16}
        alt={icon}
        className='list-item__icon'
      />
    )}

    {children}
  </li>
)

export default ListItem