import React, { createContext, useContext, useState } from 'react'
import FileExplorer from '../components/apps/file-explorer'
import TextEditor from '../components/apps/text-editor'
import Browser from '../components/apps/browser'
import Desktop from '../components/elements/desktop'
import RSSReader from '../components/apps/rss-reader'
import Gallery from '../components/apps/gallery'

const APPS = [
  {
    name: 'File Explorer',
    icon: 'icons/folder.svg',
    component: FileExplorer,
    open: false
  },
  {
    name: 'Text Editor',
    icon: 'icons/file-1.svg',
    component: TextEditor,
    open: false
  },
  {
    name: 'Browser',
    icon: 'icons/browser.svg',
    component: Browser,
    open: false
  },
  {
    name: 'RSS Reader',
    icon: 'icons/browser.svg',
    component: RSSReader,
    open: false
  },
  {
    name: 'Gallery',
    icon: 'icons/photo.svg',
    component: Gallery,
    open: false
  },
]

const DesktopContext = createContext({})

export const useDesktop = () => useContext(DesktopContext)

const DesktopContextProvider = () => {
  const [apps, setApps] = useState(APPS)

  const openApp = (name) => {
    setApps(apps.map(
      (app) => app.name === name
        ? {...app, open: true}
        : app
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