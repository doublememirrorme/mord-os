import React, { createContext, useContext, useState } from 'react'

const RootDirectoryContext = createContext({})

export const useRootDirectory = () => useContext(RootDirectoryContext)

const RootDirectoryContextProvider = ({ children }) => {
  const [rootDirHandler, setRootDirHandler] = useState(null)

  return (
    <RootDirectoryContext.Provider value={{
      rootDirHandler,
      setRootDirHandler
    }}>
      {children}
    </RootDirectoryContext.Provider>
  )
}

export default RootDirectoryContextProvider