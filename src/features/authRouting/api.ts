import type { User } from './types'

const BASE_URL = 'https://api.v2.react-learning.ru'

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

type LoginResponse = {
  user: User
  accessToken: string
}

async function readError(response: Response, fallback: string) {
  try {
    const body = await response.json()
    const message = Array.isArray(body?.message) ? body.message.join(', ') : body?.message
    return new ApiError(response.status, message || fallback)
  } catch {
    return new ApiError(response.status, fallback)
  }
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    throw await readError(response, 'Не удалось войти')
  }

  return response.json()
}

export async function fetchCurrentUser(token: string, signal?: AbortSignal): Promise<User> {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
    signal,
  })

  if (!response.ok) {
    throw await readError(response, 'Не удалось загрузить профиль')
  }

  return response.json()
}
