import { TaskCard } from 'entities/task'
import type { Task } from 'entities/task'
import styles from './TaskPage.module.css'

const previewTasks: Task[] = [
  { id: '1', title: 'Прочитать про FSD', completed: true },
  { id: '2', title: 'Сделать карточку задачи', completed: false },
  { id: '3', title: 'Собрать список с фильтрами', completed: false },
]

export function TaskPage() {
  return (
    <div>
      <h1>Мои задачи</h1>
      <div className={styles.list}>
        {previewTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
