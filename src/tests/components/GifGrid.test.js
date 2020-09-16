import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

// Finjir la llamada al custom hook
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente <GifGrid />', () => {
  const category = 'Panda'

  test('debería mostrarse correctamente', () => {
    // Falsear la data para el otro test
    useFetchGifs.mockReturnValue({
      // contenido del state de useFetchGifs
      data: [],
      loading: true,
    })

    // debería mostrarse correctamente
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debería mostrar ítems cuandose cargan imágenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.png',
        title: 'Cualquier cosa',
      },
    ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    })

    const wrapper = shallow(<GifGrid category={category} />)
    // expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('Loading').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})
