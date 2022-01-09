import React, { useState } from 'react'
import { useAuth } from '../../../contexts/auth'
import Button from '../../elements/button'
import Input from '../../elements/input'
import Modal from '../../elements/modal'
import Overlay from '../../elements/overlay'
import './index.sass'

const AuthOverlay = () => {
  const { logIn, user } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    logIn(username, password)
  }

  return user ? null : (
    <>
      <Overlay />
      <Modal className="auth-modal">
        <form className='auth-form' onSubmit={handleSubmit}>
          <Input
            type='text'
            value={username}
            onChange={e => setUsername(e.currentTarget.value)} />

          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)} />
          
          <Button type='submit'>Log in</Button>
        </form>
      </Modal>
    </>
  )
}

export default AuthOverlay