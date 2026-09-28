import { TaskCard } from 'entities/task'
import type { Task } from 'entities/task'
import { FilterButton } from 'shared/ui/FilterButton'
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
          <FilterButton
            key={item.value}
            label={item.label}
            active={item.value === filter}
            onClick={() => onFilterChange(item.value)}
          />
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
