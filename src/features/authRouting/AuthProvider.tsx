import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext, TOKEN_KEY } from './AuthContext'
import { fetchCurrentUser } from './api'
import type { User } from './types'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY))
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(Boolean(localStorage.getItem(TOKEN_KEY)))

  useEffect(() => {
    if (!token) {
      return
    }

    let cancelled = false

    fetchCurrentUser(token)
      .then((loaded) => {
        if (!cancelled) setUser(loaded)
      })
      .catch(() => {
        if (!cancelled) {
          localStorage.removeItem(TOKEN_KEY)
          setToken(null)
          setUser(null)
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [token])

  const signIn = useCallback((nextToken: string, nextUser: User) => {
    localStorage.setItem(TOKEN_KEY, nextToken)
    setToken(nextToken)
    setUser(nextUser)
    setIsLoading(false)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({ user, token, isLoading, signIn, signOut }),
    [user, token, isLoading, signIn, signOut],
  )

  return <AuthContext value={value}>{children}</AuthContext>
}
