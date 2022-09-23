import React from 'react'
import Brands from './Brands'
import Menu from './Menu'

const Sidebar = () => {
  const clients = [
    {
      id: 1,
      name: 'Client1',
      img: 'client1.png'
    },
    {
      id: 2,
      name: 'Client2',
      img: 'client2.png'
    },
    {
      id: 3,
      name: 'Client3',
      img: 'client3.png'
    },
    {
      id: 4,
      name: 'Client4',
      img: 'client4.png'
    },
    {
      id: 5,
      name: 'Client5',
      img: 'client5.png'
    },
    {
      id: 6,
      name: 'Client6',
      img: 'client6.png'
    }
  ]

  const menuItems = [
    {
      id: 1,
      name: 'Notifications',
      icon: 'bi bi-bell',
      submenu: []
    },
    {
      id: 2,
      name: 'Summary',
      icon: 'bi bi-easel',
      submenu: ['Item1', 'Item2', 'Item3']
    },
    {
      id: 3,
      name: 'Publish',
      icon: 'bi bi-pencil-square',
      submenu: ['Compose', 'Feed']
    },
    {
      id: 4,
      name: 'Engage',
      icon: 'bi bi-chat',
      submenu: ['Item1', 'Item2', 'Item3']
    },
    {
      id: 5,
      name: 'Listen',
      icon: 'bi bi-activity',
      submenu: ['Item1', 'Item2']
    },
    {
      id: 6,
      name: 'Report',
      icon: 'bi bi-graph-up-arrow',
      submenu: ['Item1']
    }
  ]

  return (
    <div>
      <img src="logo.png" className="px-1 py-3" alt="Logo" />
      <div className="row min-vh-100 d-flex">
        <div className="col-3 py-3 px-0 brands">
          <Brands clients={clients} />
        </div>
        <div className="col-9 p-0">
          <Menu menuItems={menuItems} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
