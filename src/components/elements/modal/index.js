import React from "react"
import { Rnd } from 'react-rnd'
import classNames from "classnames"
import './index.sass'

const Modal = ({
  title,
  onClose: handleClose,
  children,
  disableDragging = false,
  disableHeader = false,
  actionButton = null,
  className,
  ...props
}) => {
  return (
      <Rnd
        className={classNames('modal', className)}
        default={{
          x: 50,
          y: 50,
          width: 500,
          height: 400
        }}
        
        disableDragging={disableDragging}
        dragHandleClassName="modal__header"
        {...props}
      >
        {!disableHeader && (
          <header className="modal__header">
            {title}

            <div className="modal__btn--close" onClick={handleClose} />
          </header>
        )}
        <main className="modal__content">{children}</main>
        {actionButton && (
          <footer>
            {actionButton}
          </footer>
        )}
      </Rnd>
  )
}

export default Modal