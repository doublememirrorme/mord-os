import React, { createContext, useContext, useEffect, useState } from 'react'
import AuthOverlay from '../components/modules/auth-overlay'

const USERS = {
  "borgoth@mordos.com": "12bindthem"
}

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const { localStorage } = window
  const [user, setUser] = useState(localStorage.getItem('user') || '')

  const logIn = (email = '', password = '') => {
    if (USERS[email] === password) {
      setUser(email)
      localStorage.setItem('user', email)
    }
  }

  return (
    <AuthContext.Provider value={{
      logIn,
      user
    }}>
      {!user ? <AuthOverlay /> : children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider