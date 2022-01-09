import React from "react"
import Modal from "../../elements/modal"
import { useDesktop } from '../../../contexts/desktop'

const AppContainer = ({name, open, component: Component}) => {
  const { closeApp } = useDesktop()

  const handleClose = () => {
    closeApp(name)
  }

  return !open ? null : (
    <Modal title={name} onClose={handleClose}>
      <Component />
    </Modal>
  )
}
export default AppContainer