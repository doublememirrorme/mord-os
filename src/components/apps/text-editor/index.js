import React, { useEffect, useState, useRef } from 'react'
import { useRootDirectory } from '../../../contexts/root-directory';
import Button from '../../elements/button';
import './index.sass'

const TextEditor = () => {
  const { fileHandler, setFileHandler } = useRootDirectory()
  const ref = useRef(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    const getText = async () => {
      const file = await fileHandler.getFile()
      const text = await file.text()
      setValue(text)
    }

    fileHandler && getText()
  }, [fileHandler])

  useEffect(() => () => {
    setFileHandler(null)
  }, []);

  const handleSave = async () => {
    if (fileHandler) {
      const stream = await fileHandler.createWritable()
      await stream.write(ref.current.value)
      await stream.close()
    }
  }

  return (
    <>
      <textarea
        className='text-editor'
        ref={ref}
        defaultValue={value}
      />
      <Button
        className='text-editor__btn--save'
        onClick={handleSave}
      >
        Save
      </Button>
    </>
  );
}

export default TextEditor