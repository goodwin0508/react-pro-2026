import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext, TOKEN_KEY } from './AuthContext'
import { ApiError, fetchCurrentUser } from './api'
import type { User } from './types'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY))
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(() => Boolean(localStorage.getItem(TOKEN_KEY)))
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!token || user) {
      return
    }

    const controller = new AbortController()

    fetchCurrentUser(token, controller.signal)
      .then((loaded) => setUser(loaded))
      .catch((caught: unknown) => {
        if (caught instanceof DOMException && caught.name === 'AbortError') {
          return
        }

        if (caught instanceof ApiError && (caught.status === 401 || caught.status === 403)) {
          localStorage.removeItem(TOKEN_KEY)
          setToken(null)
          setError('Сессия истекла, войдите заново')
          return
        }

        setError(caught instanceof Error ? caught.message : 'Не удалось загрузить профиль')
      })
      .finally(() => setIsLoading(false))

    return () => controller.abort()
  }, [token, user])

  const signIn = useCallback((nextToken: string, nextUser: User) => {
    localStorage.setItem(TOKEN_KEY, nextToken)
    setToken(nextToken)
    setUser(nextUser)
    setIsLoading(false)
    setError(null)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
    setUser(null)
    setError(null)
  }, [])

  const value = useMemo(
    () => ({ user, token, isLoading, error, signIn, signOut }),
    [user, token, isLoading, error, signIn, signOut],
  )

  return <AuthContext value={value}>{children}</AuthContext>
}
