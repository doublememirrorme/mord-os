import React from 'react'
import Button from '../../elements/button'
import Modal from '../../elements/modal'
import { useRootDirectory } from '../../../contexts/root-directory'
import './index.sass'

const RootDirectoryPicker = () => {
  const { setRootDirHandler } = useRootDirectory()

  const handleClick = async e => {
    const root = await window.showDirectoryPicker()
    setRootDirHandler(root)
  }

  return (
    <Modal
      default={{}}
      className='root-directory-picker'
      style={{ left: '50%', top: '50%' }}
      disableDragging
      disableHeader
    >
      <p style={{ fontWeight: 'bold', marginTop: 0 }}>Please select root folder for the application</p>

      <Button onClick={handleClick}>Select</Button>
    </Modal>
  )
}

export default RootDirectoryPicker