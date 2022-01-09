import classNames from "classnames"
import React from "react"
import './index.sass'

const Modal = ({ children, className }) => {
  return (
    <div className={classNames('modal', className)}>
      <header></header>
      <main>{children}</main>
    </div>
  )
}

export default Modal