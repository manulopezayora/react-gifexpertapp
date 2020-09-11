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

export default GifGridItem
