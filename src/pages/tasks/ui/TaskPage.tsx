import { Link } from 'react-router'
import { TaskWidget } from 'widgets/task'
import styles from './TaskPage.module.css'

export function TaskPage() {
  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <Link className={styles.link} to="/register">
          Регистрация и подписка
        </Link>
        <Link className={styles.link} to="/refs">
          Примеры useRef
        </Link>
        <Link className={styles.link} to="/public">
          Открытая страница
        </Link>
        <Link className={styles.link} to="/profile">
          Профиль
        </Link>
      </div>
      <h1>Мои задачи</h1>
      <TaskWidget />
    </div>
  )
}
