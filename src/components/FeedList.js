import React from 'react'
import FeedItem from './FeedItem'

const FeedList = ({ items }) => {
  const renderedItems = items.map((item, index) => {
    return <FeedItem key={index} item={item} />
  })

  return <div className="row">{renderedItems}</div>
}

export default FeedList
