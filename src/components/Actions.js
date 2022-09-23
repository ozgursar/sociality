import React from 'react'

const Actions = ({ status }) => {
  return (
    <div>
      {status === 0 ? <i className="bi bi-check-lg action-icon px-2"></i> : ''}
      {status === 1 ? <i className="bi bi-slash-circle action-icon px-2"></i> : ''}

      <i className="bi bi-trash3 action-icon px-2"></i>
      <i className="bi bi-three-dots action-icon px-2"></i>
    </div>
  )
}

export default Actions
