import { Link } from 'react-router'
import styles from './PublicPage.module.css'

export function PublicPage() {
  return (
    <div className={styles.page}>
      <h1>Открытая страница</h1>
      <p className={styles.text}>Эта страница доступна без входа.</p>
      <Link className={styles.link} to="/login">
        Войти
      </Link>
    </div>
  )
}
