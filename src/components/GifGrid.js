import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import Loading from './Loading'

import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <h3 className="animate__animated animate__lightSpeedInLeft">
        {category}
      </h3>
      {loading && <Loading />}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid
