import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Pruebas para el componente <GifExpertApp />', () => {
  test('debería mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar una lista de categorías', () => {
    const categories = ['Panda', 'Dog']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})
