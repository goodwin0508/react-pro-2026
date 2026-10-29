import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { login, useAuth } from 'features/authRouting'
import styles from './LoginPage.module.css'

export function LoginPage() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setIsPending(true)

    try {
      const { token, data } = await login(email, password)
      signIn(token, data)
      navigate('/profile', { replace: true })
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Не удалось войти')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className={styles.page}>
      <h1>Вход</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Пароль</span>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        <button className={styles.submit} type="submit" disabled={isPending}>
          {isPending ? 'Входим…' : 'Войти'}
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  )
}
