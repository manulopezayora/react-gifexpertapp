import React, { useState } from 'react'

// Components
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Panda'])

  // const handleAdd = () => {
  //    ? Con spread operator
  //    setCategories(['Malamute', ...categories])

  //    ? Con un callback y spread operator
  //   setCategories((cats) => ['Malamute', ...categories])
  // }

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
