import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe retornar el estado inicial', async () => {
    // Crea un componente "virtual" y pone el custom hook para testearlo
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Panda')
    )
    const { data, loading } = result.current

    // * Se necesita poner aquí para que funcione la segunda prueba. Porque cuando se lanza este test se ejecuta también el useEffect y al finalizar hace el unMount del custom hook
    await waitForNextUpdate()
    // Se hace el update antes de que limpie el custom hook

    // data es un array vacío
    expect(data).toEqual([])
    // loading es true
    expect(loading).toBe(true)
  })

  test('debe de retornar un array de imágenes y loading en false', async () => {
    // waitForNextUpdate -> es un método que devuelve una promesa que indica cuando sucede un cambio en el custom hook
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Panda')
    )
    await waitForNextUpdate()
    const { data, loading } = result.current
    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  })
})
