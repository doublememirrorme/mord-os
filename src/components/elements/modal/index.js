import React, { useState } from "react"
import { Rnd } from 'react-rnd'
import classNames from "classnames"
import './index.sass'

const Modal = ({ title, onClose: handleClose, children, className }) => {
  return (
      <Rnd
        className={classNames('modal', className)}
        default={{
          x: 50,
          y: 50,
          width: 500,
          height: 400
        }}
        dragHandleClassName="modal__header"
      >
        <header className="modal__header">
          {title}

          <div className="modal__btn--close" onClick={handleClose} />
        </header>
        <main className="modal__content">{children}</main>
      </Rnd>
  )
}

export default Modal