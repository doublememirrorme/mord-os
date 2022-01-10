import React from 'react'
import './index.sass'

const RSSReaderItem = ({name, email, body}) => {
  return (
    <li className='rss-reader__item'>
      <h3>{name}</h3>
      <p>{body}</p>
      <p className='rss-reader__item__email'>
        <small>{email?.toLowerCase()}</small>
      </p>
    </li>
  )
}

export default RSSReaderItem