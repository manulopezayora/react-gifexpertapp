import React, { useState } from 'react'

// Components
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories)

  return (
    <>
      <h1 className="title">GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {
        <ol>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      }
    </>
  )
}

export default GifExpertApp
