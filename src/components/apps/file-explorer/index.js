import React, {useState, useEffect} from "react"
import {DndContext} from '@dnd-kit/core'
import { useDesktop } from "../../../contexts/desktop"
import { useRootDirectory } from "../../../contexts/root-directory"
import List from "../../elements/list"
import ListItem from "../../elements/list/item"
import Breadcrumbs from "./breadcrumbs"

const ICONS = {
  directory: 'folder.svg',
  default: 'file-1.svg'
}

const FileExplorer = () => {
  const [files, setFiles] = useState([])
  const { openDir, setBreadcrumbs, breadcrumbs, setFileHandler } = useRootDirectory()
  const { openApp } = useDesktop()

  useEffect(() => {
    const getFiles = async () => {
      const promises = []
      for await (const entry of openDir?.values()) {
        promises.push(entry)
      }
      
      setFiles(await Promise.all(promises))
    }

    openDir && getFiles()
  }, [openDir])

  const handleDoubleClick = async (file) => {
    if (file.kind !== 'directory') {
      setFileHandler(await file)
      openApp('Text Editor')
    }

    else {
      const dir = await openDir.getDirectoryHandle(file.name)
      setBreadcrumbs([...breadcrumbs, dir])
    }
  }

  const handleClick = async (file) => {
    if (window.innerWidth < 750) {
      if (file.kind !== 'directory') {
        setFileHandler(await file)
        openApp('Text Editor')
      }
  
      else {
        const dir = await openDir.getDirectoryHandle(file.name)
        setBreadcrumbs([...breadcrumbs, dir])
      }
    }
  }

  const handleSort = (a, b) => a.kind === b.kind
    ? a.name < b.name
      ? -1
      : a.name > b.name ? 1 : 0
    : a.kind === 'directory' ? -1 : 1

  return (
    <>
      <Breadcrumbs />
      <DndContext>
        <List>
          {files.sort(handleSort).map((file, index) => {
            const { name, kind, type } = file

            return (
              <ListItem
                className='file-explorer--item'
                icon={ICONS[kind ? kind : type] || ICONS['default']}
                key={index}
                onDoubleClick={() => handleDoubleClick(file)}
                onPointerUp={() => handleClick(file)}
              >
                {name}
              </ListItem>
            )
          })}
        </List>
      </DndContext>
    </>
  )
}

export default FileExplorer