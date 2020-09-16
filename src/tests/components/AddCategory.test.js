import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Pruebas en el componente <AddCategory />', () => {
  const setCategories = jest.fn() // () => {}

  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  // Ciclo de vida => Todo lo que necesito reiniciar o inicializar
  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('debería mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe cambiar la caja de texto', () => {
    const input = wrapper.find('input')

    // Para testear el cambio en el input necesitamos el evento
    const value = 'Panda'
    input.simulate('change', { target: { value } })

    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('NO debe de postear la información con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} })

    expect(setCategories).not.toHaveBeenCalled()
  })

  test('debe de llamar el setCategories y limpiar la caja de texto ', () => {
    const value = 'Hola Mundo'
    // 1. simular el inputChange
    wrapper.find('input').simulate('change', { target: { value } })

    // 2. simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} })

    // 3. setCategory se tiene que haber sido ejecutada
    expect(setCategories).toHaveBeenCalled() // Se ejecuta
    expect(setCategories).toHaveBeenCalledTimes(1) // Se ejecuta 1 vez
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)) // Cualquier tipo de función

    // 4. el valor del input debe de estar limpia ""
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
