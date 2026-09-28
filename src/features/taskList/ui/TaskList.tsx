import { TaskCard } from 'entities/task'
import type { Task } from 'entities/task'
import type { Filter } from '../model/useTasks'
import styles from './TaskList.module.css'

type Props = {
  tasks: Task[]
  filter: Filter
  onFilterChange: (filter: Filter) => void
  onRemove: (id: string) => void
}

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'completed', label: 'Завершённые' },
  { value: 'incomplete', label: 'Незавершённые' },
]

export function TaskList({ tasks, filter, onFilterChange, onRemove }: Props) {
  return (
    <div>
      <div className={styles.filters}>
        {filters.map((item) => (
          <button
            key={item.value}
            className={item.value === filter ? styles.filterActive : styles.filter}
            onClick={() => onFilterChange(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {tasks.length === 0 && <p className={styles.empty}>Задач нет</p>}
        {tasks.map((task) => (
          <div key={task.id} className={styles.row}>
            <TaskCard task={task} />
            <button
              className={styles.remove}
              onClick={() => onRemove(task.id)}
              aria-label={`Удалить задачу «${task.title}»`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
