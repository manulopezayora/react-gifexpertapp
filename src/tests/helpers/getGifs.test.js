import '@testing-library/jest-dom'
import getGifs from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetch', () => {
  test('debe de traer 1o elementos', async () => {
    const gifs = await getGifs('cats')

    expect(gifs.length).toBe(10)
  })

  test('debe traer 0 resultados si no le pasamos el argumento de búsqueda ', async () => {
    const gifs = await getGifs('')

    expect(gifs.length).toBe(0)
  })
})
