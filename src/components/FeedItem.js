import React from 'react'
import Actions from './Actions'

const FeedItem = ({ item }) => {
  const formatDate = feedDate => {
    const date = feedDate.split(' ')[0]
    const time = feedDate.split(' ')[1].split(':')
    time.pop() // remove seconds
    const formattedTime = time.join(':') // join hours and minutes

    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    return formattedDate + ' - ' + formattedTime
  }

  // remove bitly links and append as anchor
  const formatMessage = message => {
    if (message.includes('http')) {
      const textContent = message.split('http')[0]
      const linkContent = `http${message.split('http')[1]}`
      return (
        <>
          {textContent}
          <a href={linkContent}>{linkContent}</a>
        </>
      )
    }
    return message
  }

  const statusBarColor = status => {
    switch (status) {
      case 0:
        return 'status-need-approval'
        break
      case 1:
        return 'status-scheduled'
        break
      case 2:
        return 'status-publishing'
        break
      case 3:
        return 'status-published'
      case 4:
        return 'status-error'
        break
      default:
        return ''
    }
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="border rounded d-flex bg-white h-100">
        <div className={`${statusBarColor(item.status)} rounded-start p-1 d-flex align-items-center text-white`}>
          {item.account.channel === 'instagrambusiness' ? <i className="bi bi-instagram"></i> : ''}
          {item.account.channel === 'facebook' ? <i className="bi bi-facebook"></i> : ''}
          {item.account.channel === 'twitter' ? <i className="bi bi-twitter"></i> : ''}
        </div>
        <div className="p-3 d-flex flex-column justify-content-between">
          <div className="text-muted opacity-75 d-flex justify-content-between">
            <div>
              <small>{formatDate(item.published_at)}</small>
            </div>
            <Actions status={item.status} />
          </div>
          <div className="text-secondary py-3">
            <small>{formatMessage(item.entry.message)}</small>
          </div>
          <div className="h-100">
            <img src={item.entry.image[0].length > 1 ? item.entry.image : 'no-post-image.png'} alt={item.entry.message} className="img-fluid" />
          </div>
          <div className="text-muted opacity-75 mt-3">
            <small>
              <i className="bi bi-heart px-1"></i> 0<i className="bi bi-share ps-3 px-1"></i> 0<i className="bi bi-eye ps-3 px-1"></i> 0
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedItem
