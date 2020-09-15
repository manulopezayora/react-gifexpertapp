import React from 'react'

// Librería para las ayudas de vscode
import '@testing-library/jest-dom'

// Librería enzyme (AirBnB)
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas en el componente <GifGridItem />', () => {
  const title = 'Un título'
  const url = 'https://localhost/algo.png'
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de tener un párrafo con el título', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })

  test('Debe tener la imagen igual al url y alt de los props', () => {
    // Si hay más de una img se haría como el querySelectorAll("#img")
    const img = wrapper.find('img')
    // console.log(img.html())
    // console.log(img.props())
    // console.log(img.prop('src'))
    // console.log(img.props().src)
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('Debe tener las clases .animate__fadeIn', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')

    expect(className.includes('animate__fadeIn')).toBe(true)
  })
})
