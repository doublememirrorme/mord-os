import React from "react"
import Modal from "../../elements/modal"
import { useDesktop } from '../../../contexts/desktop'

const AppContainer = ({name, open, component: Component, data}) => {
  const { closeApp } = useDesktop()

  const handleClose = () => {
    closeApp(name)
  }

  return !open ? null : (
    <Modal title={name} onClose={handleClose}>
      <Component data={data} />
    </Modal>
  )
}
export default AppContainer