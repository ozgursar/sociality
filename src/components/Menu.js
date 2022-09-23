import React, { useState } from 'react'
import Submenu from './Submenu'

const Menu = ({ menuItems }) => {
  const [selectedItem, setSelectedItem] = useState(3)

  const onSelectMenu = id => {
    setSelectedItem(id)
  }

  const renderedItems = menuItems.map(({ id, name, icon, submenu }) => {
    return (
      <div
        onClick={() => {
          onSelectMenu(id)
        }}
        key={id}
      >
        <div className={`d-flex justify-content-between align-items-center cursor-pointer text-light py-2 ${selectedItem === id ? 'menu-item-active' : ''}`}>
          <i className={`${icon} px-3 menuicon`}></i>
          <small className="w-100 text-start py-2">{name.toUpperCase()}</small>
          {name === 'Notifications' ? (
            <div className="pe-3">
              <span className="counter">29</span>
            </div>
          ) : (
            <i className={`bi ${selectedItem === id ? 'bi-dash' : 'bi-plus-lg'} px-2 text-dark pe-3`}></i>
          )}
        </div>
        {selectedItem === id && submenu.length ? <Submenu items={submenu} /> : ''}
      </div>
    )
  })

  return <div>{renderedItems}</div>
}

export default Menu
