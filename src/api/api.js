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
    console.log(data.message)
  } catch (error) {
    console.error('Erro ao cadastrar:', error)
  }
}
