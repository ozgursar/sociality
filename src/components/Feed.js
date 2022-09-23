import React from 'react'
import jsonData from '../data/data.json'
import FeedList from './FeedList'

const Feed = () => {
  const postsByDate = jsonData.posts_by_date

  // Sort by descending dates
  const sorted = Object.fromEntries(Object.entries(postsByDate).sort().reverse())

  const formatDate = feedDate => {
    return new Date(feedDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const renderedFeeds = Object.keys(sorted).map((item, index) => {
    return (
      <div key={index} className="my-4">
        <div className="text-success mb-2">{formatDate(item)}</div>
        <FeedList items={postsByDate[item]} />
      </div>
    )
  })

  return (
    <div className="my-3">
      <div>
        <span className="color-published me-1 me-md-3 me-lg-5 text-nowrap">
          <i className="bi bi-circle-fill"></i> Published
        </span>
        <span className="color-scheduled me-1 me-md-3 me-lg-5 text-nowrap">
          <i className="bi bi-circle-fill"></i> Scheduled
        </span>
        <span className="color-need-approval me-1 me-md-3 me-lg-5 text-nowrap">
          <i className="bi bi-circle-fill"></i> Need Approval
        </span>
        <span className="color-error me-1 me-md-3 me-lg-5 text-nowrap">
          <i className="bi bi-circle-fill"></i> Error
        </span>
        <span className="color-notes text-nowrap">
          <i className="bi bi-circle-fill"></i> Notes
        </span>
      </div>
      {renderedFeeds}
    </div>
  )
}

export default Feed
