import React, { createContext, useContext, useState } from 'react'
import AuthOverlay from '../components/modules/auth-overlay'
import RootDirectoryPicker from '../components/modules/root-directory-picker'
import { useRootDirectory } from './root-directory'

const USERS = {
  "borgoth@mordos.com": {
    password: "12bindthem",
    username: "borgoth"
  }
}

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const { localStorage } = window
  const { rootDirHandler } = useRootDirectory()
  const [user, setUser] = useState(localStorage.getItem('user') || '')

  const logIn = (email = '', password = '') => {
    if (!USERS[email]) throw new Error('No such user')
    if (USERS[email].password === password) {
      setUser(email)
      localStorage.setItem('user', email)
    } else throw new Error('Wrong passwordd')

  }

  return (
    <AuthContext.Provider value={{
      logIn,
      user
    }}>
      {!user
        ? <AuthOverlay />
        : rootDirHandler
          ? children
          : <RootDirectoryPicker />
      }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider