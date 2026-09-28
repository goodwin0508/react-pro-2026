import type { Task } from '../model/types'
import styles from './TaskCard.module.css'

type Props = {
  task: Task
}

export function TaskCard({ task }: Props) {
  return (
    <div className={styles.card}>
      <span className={task.completed ? styles.statusDone : styles.status}>
        {task.completed ? '✓' : '○'}
      </span>
      <span className={task.completed ? styles.titleDone : styles.title}>{task.title}</span>
    </div>
  )
}
