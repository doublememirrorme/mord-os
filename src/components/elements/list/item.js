import React from 'react'
import classNames from 'classnames'
import {useDraggable} from '@dnd-kit/core'
import './item.sass'

const ListItem = ({ icon, children, className, ...props }) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.key,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined

  return (
    <li
      ref={setNodeRef}
      className={classNames('list-item', className)}
      {...listeners}
      {...attributes}
      {...props}
      style={style}
    >
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
}

export default ListItem