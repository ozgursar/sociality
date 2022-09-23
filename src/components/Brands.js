import React, { useState } from 'react'

const Brands = ({ clients }) => {
  const [selectedClient, setSelectedClient] = useState(4)
  const onLogoClick = id => {
    setSelectedClient(id)
  }

  const renderedClients = clients.map(({ id, name, img }) => {
    return (
      <div key={id} onClick={() => onLogoClick(id)} className={`p-1 cursor-pointer ${id === selectedClient ? 'selectedClient' : ''}`}>
        <img src={`clientlogos/${img}`} alt={name} className={id !== selectedClient ? 'opacity-25' : ''} />
      </div>
    )
  })

  return <div>{renderedClients}</div>
}

export default Brands
