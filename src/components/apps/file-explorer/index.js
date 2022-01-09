import React from "react"
import { useAuth } from '../../../contexts/auth'
import List from "../../elements/list"

const FileExplorer = () => {
  const { user } = useAuth()


  return (
    <List items={[1, 2, 3]} />
  )
}

export default FileExplorer