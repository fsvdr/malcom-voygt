import React from 'react'
import './index.css'

const ClientCard = ({ name, work }) => (
  <div className="client">
    <h2>{name}</h2>
    <p>{work}</p>
  </div>
)

export default ClientCard
