import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const ClientCard = ({ name, work }) => (
  <div className="client">
    <h2>{name}</h2>
    <p>{work}</p>
  </div>
)

ClientCard.propTypes = {
  name: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
}

export default ClientCard
