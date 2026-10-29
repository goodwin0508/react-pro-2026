import { useNavigate } from 'react-router'
import { useAuth } from 'features/authRouting'
import styles from './ProfilePage.module.css'

export function ProfilePage() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate('/login', { replace: true })
  }

  return (
    <div className={styles.page}>
      <h1>Профиль</h1>
      <div className={styles.card}>
        <p className={styles.name}>{user?.name}</p>
        <p className={styles.email}>{user?.email}</p>
        <button className={styles.signOut} type="button" onClick={handleSignOut}>
          Выйти
        </button>
      </div>
    </div>
  )
}
