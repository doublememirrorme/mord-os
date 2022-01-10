import React, { useEffect, useState, useRef } from 'react'
import RSSReaderItem from './item'
import './index.sass'

const PER_PAGE = 10

const RSSReader = () => {
  const [feed, setFeed] = useState([])
  const [sliceIndex, setSliceIndex] = useState(0)
  const [paginated, setPaginated] = useState([])
  const ref = useRef()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments')

      setFeed(await response.json())
    }

    getData()
  }, [])

  useEffect(() => {
    const setPagination = () => {
      setPaginated(feed.slice(sliceIndex, sliceIndex + PER_PAGE))
      setSliceIndex(sliceIndex + PER_PAGE)
    }

    setPagination()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feed])

  const handleScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;

      if (scrollTop + clientHeight > scrollHeight * .8) {
        setPaginated([
          ...paginated,
          ...feed.slice(sliceIndex, sliceIndex + PER_PAGE
        )])
        setSliceIndex(sliceIndex + PER_PAGE)
      }
    }
  }

  return (
    <ul className='rss-reader' onScroll={handleScroll} ref={ref}>
      {paginated.map(({id, name, email, body}) => (
        <RSSReaderItem {...{name, email, body}} key={id} />
      ))}
    </ul>
  )
}

export default RSSReader