import React, { useCallback, useState } from 'react'
import Input from '../../elements/input'
import './index.sass'

const Browser = () => {
  const [url, setUrl] = useState('')
  const [currentUrl, setCurrentUrl] = useState(url)

  const handlePageChange = useCallback(e => {
    if (e.key === 'Enter' || e.code === 'Enter' ) {
      setCurrentUrl(
        (url.startsWith('http://') || url.startsWith('https://')
          ? url
          : `https://${url}`
        )
      )
    }
  }, [url])

  return (
    <>
      <Input
        type="url"
        placeholer="www.example.com"
        className='browser__input'
        value={url}
        onChange={e => setUrl(e.target.value)}
        onKeyUp={handlePageChange}
      />
      <iframe src={currentUrl} title='browser' className='browser'/>
    </>
  )
}

export default Browser