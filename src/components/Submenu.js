import React, { useState } from 'react'

const Submenu = ({ items }) => {
  const [activeItem, setActiveItem] = useState(items.includes('Feed') ? 1 : 0)

  const onSubMenuItemClick = index => {
    setActiveItem(index)
  }

  const renderedSubMenuItems = items.map((item, index) => {
    return (
      <li className="py-2" key={index}>
        <small onClick={() => onSubMenuItemClick(index)} className={`cursor-pointer ${activeItem === index ? 'active' : ''}`}>
          {item}
        </small>
      </li>
    )
  })

  return (
    <div className="submenu text-light text-start px-3 pt-3 pb-1">
      <ul>{renderedSubMenuItems}</ul>
    </div>
  )
}

export default Submenu
