import { memo } from 'react'
import type { Task } from '../model/types'
import styles from './TaskCard.module.css'

type Props = {
  task: Task
  onRemove: (id: string) => void
}

export const TaskCard = memo(function TaskCard({ task, onRemove }: Props) {
  return (
    <div className={styles.card}>
      <span className={task.completed ? styles.statusDone : styles.status}>
        {task.completed ? '✓' : '○'}
      </span>
      <span className={task.completed ? styles.titleDone : styles.title}>{task.title}</span>
      <button
        className={styles.remove}
        onClick={() => onRemove(task.id)}
        aria-label={`Удалить задачу «${task.title}»`}
      >
        ×
      </button>
    </div>
  )
})
