import React, {useState} from 'react'
import classNames from 'classnames'
import './index.sass'

const Input = ({ className, value: propsValue, ...props }) => (
  <input className={classNames('input', className)} {...props} />
)

export default Input