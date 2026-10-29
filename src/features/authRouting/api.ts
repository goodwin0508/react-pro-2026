import type { User } from './types'

const BASE_URL = 'https://api.v2.react-learning.ru'

type LoginResponse = {
  token: string
  data: User
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const message = response.status === 401 ? 'Неверный email или пароль' : 'Не удалось войти'
    throw new Error(message)
  }

  return response.json()
}

export async function fetchCurrentUser(token: string): Promise<User> {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!response.ok) {
    throw new Error('Не удалось загрузить профиль')
  }

  return response.json()
}
