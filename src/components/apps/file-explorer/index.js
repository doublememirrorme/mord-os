import React, {useState, useEffect} from "react"
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
  const { rootDirHandler, setRootDirHandler, openDir, setOpenDir, setBreadcrumbs, breadcrumbs } = useRootDirectory()
  const { openApp } = useDesktop()

  useEffect(() => {
    const getFiles = async () => {
      const promises = []
      for await (const entry of openDir?.values()) {
        promises.push(
          entry.kind !== 'file' ? entry : entry.getFile()
        )
      }
      
      setFiles(await Promise.all(promises))
    }

    openDir && getFiles()
  }, [openDir])

  const handleDoubleClick = async (file) => {
    if (file.kind !== 'directory')
      openApp('Text Editor', file)

    else {
      const dir = await openDir.getDirectoryHandle(file.name)
      setBreadcrumbs([...breadcrumbs, dir])
    }
  }

  return (
    <>
      <Breadcrumbs />
      <List>
        {files.map((file, index) => {
          const { name, kind, type } = file

          return (
            <ListItem
              className='file-explorer--item'
              icon={ICONS[kind ? kind : type] || ICONS['default']}
              key={index}
              onDoubleClick={() => handleDoubleClick(file)}
            >
              {name}
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default FileExplorer