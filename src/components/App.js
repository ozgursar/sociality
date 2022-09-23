import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'

const App = () => {
  return (
    <div className="bg-light">
      <div className="row m-0 min-vh-100 d-flex">
        <div className="col-6 col-md-4 col-lg-3 sidebar-outer text-center">
          <Sidebar />
        </div>
        <div className="col-6 col-md-8 col-lg-9">
          <Feed />
        </div>
      </div>
    </div>
  )
}

export default App
