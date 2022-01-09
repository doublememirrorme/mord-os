import React, { createContext, useContext, useEffect, useState } from 'react'
import AuthOverlay from '../components/modules/auth-overlay'

const USERS = {
  "borgoth@mordos.com": "12bindthem"
}

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('')

  const logIn = (email = '', password = '') => (
    USERS[email] === password && setUser(email)
  )

  return (
    <AuthContext.Provider value={{
      logIn,
      user
    }}>
      <AuthOverlay>
        {children}
      </AuthOverlay>
    </AuthContext.Provider>
  )
}

export default AuthContextProvider