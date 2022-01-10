import React, { createContext, useContext, useEffect, useState } from 'react'
import { get, set } from 'idb-keyval'
import { flushSync } from 'react-dom'

const RootDirectoryContext = createContext({})

export const useRootDirectory = () => useContext(RootDirectoryContext)

const verifyPermissions = async (fileHandle, readWrite) => {
  const options = {}
  if (readWrite)
    options.mode = 'readWrite'

  if ((await fileHandle.queryPermission(options)) === 'granted') {
    return true;
  }

  if ((await fileHandle.requestPermission(options)) === 'granted') {
    return true;
  }

  return false;
}

const RootDirectoryContextProvider = ({ children }) => {
  const [rootDirHandler, setRootDirHandler] = useState(null)
  const [openDir, setOpenDir] = useState(null)
  const [breadcrumbs, setBreadcrumbs] = useState([])

  useEffect(() => {
    setBreadcrumbs([rootDirHandler])
  }, [rootDirHandler])

  useEffect(() => {
    console.log('bbb', breadcrumbs, breadcrumbs.length)
    breadcrumbs.length && setOpenDir(breadcrumbs[breadcrumbs.length - 1])
  }, [breadcrumbs])

  // useEffect(() => {
  //   if (breadcrumbs[breadcrumbs.length - 1] === openDir) {
  //     setBreadcrumbs([...breadcrumbs, openDir])
  //   }
  // }, [openDir])

  // useEffect(() => {
  //   openDir && setBreadcrumbs(() => [...breadcrumbs, openDir])
  // }, [openDir])

  // useEffect(() => {
  //   const storeHandler = async () => {
  //     try {
  //       const handler = await get('root')
  //       console.log(handler)
  //       if (handler) {
  //         // verifyPermissions(handler)
  //         setRootDirHandler(handler)
  //         return
  //       }
  //       await set('root', rootDirHandler)
  //     } catch (e) {
  //       console.log(e.name, e.message)
  //     }
  //   }

  //   !rootDirHandler && storeHandler()
  // }, [rootDirHandler])

  return (
    <RootDirectoryContext.Provider value={{
      rootDirHandler,
      setRootDirHandler,
      verifyPermissions,
      setOpenDir,
      breadcrumbs,
      setBreadcrumbs,
      openDir
    }}>
      {children}
    </RootDirectoryContext.Provider>
  )
}

export default RootDirectoryContextProvider