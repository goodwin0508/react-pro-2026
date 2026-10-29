import { createContext } from 'react'
import type { AuthContextValue } from './types'

export const TOKEN_KEY = 'react-pro-token'

export const AuthContext = createContext<AuthContextValue | null>(null)
