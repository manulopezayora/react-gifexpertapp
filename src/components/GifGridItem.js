import { PropTypes } from 'prop-types'
import React from 'react'

// Styled
import '../index.css'

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img className="card__img" src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifGridItem
