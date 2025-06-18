import { store } from '@/store/store'

export const register = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(store.objRegister),
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro ao cadastrar:', error)
  }
}

export const getRegister = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/registration', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) throw new Error('Erro ao buscar dados')
    const data = await response.json()

    store.objRegister = data[0]
    return data
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return null
  }
}
