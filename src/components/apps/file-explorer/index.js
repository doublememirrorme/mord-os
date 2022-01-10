import React, {useState, useEffect} from "react"
import { useDesktop } from "../../../contexts/desktop"
import { useRootDirectory } from "../../../contexts/root-directory"
import List from "../../elements/list"
import ListItem from "../../elements/list/item"

const ICONS = {
  directory: 'folder.svg',
  default: 'file-1.svg'
}

const FileExplorer = () => {
  const [files, setFiles] = useState([])
  const { rootDirHandler } = useRootDirectory()
  const { openApp } = useDesktop()

  useEffect(() => {
    const getFiles = async () => {
      const promises = []
      for await (const entry of rootDirHandler.values()) {
        console.dir(entry)
        promises.push(
          entry.kind !== 'file' ? entry : entry.getFile()
        )
      }
      
      setFiles(await Promise.all(promises))
    }

    getFiles()
  }, [rootDirHandler])

  useEffect(() => {console.log(files)}, [files])

  const handleDoubleClick = (file) => {
    console.log(file)
    openApp('Text Editor', file)
  }

  return (
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
  )
}

export default FileExplorer