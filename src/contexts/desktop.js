import React, { createContext, useContext, useEffect, useState } from 'react'
import FileExplorer from '../components/apps/file-explorer'
import TextEditor from '../components/apps/text-editor'
import Desktop from '../components/elements/desktop'

const APPS = [
  {
    name: 'File Explorer',
    icon: 'logo192.png',
    component: FileExplorer,
    open: false
  },
  {
    name: 'Text Editor',
    icon: 'logo192.png',
    component: TextEditor,
    open: false
  },
]

const DesktopContext = createContext({})

export const useDesktop = () => useContext(DesktopContext)

const DesktopContextProvider = () => {
  const [apps, setApps] = useState(APPS)

  const openApp = name => {
    setApps(apps.map(
      (app) => app.name === name ? {...app, open: true} : app
    ))
  }

  const closeApp = name => {
    setApps(apps.map(
      (app) => app.name === name ? {...app, open: false} : app
    ))
  }

  return (
    <DesktopContext.Provider value={{
      apps, openApp, closeApp
    }}>
      <Desktop />
    </DesktopContext.Provider>
  )
}

export default DesktopContextProvider