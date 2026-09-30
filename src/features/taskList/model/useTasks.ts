import { useCallback, useMemo, useState } from 'react'
import type { Task } from 'entities/task'

export type Filter = 'all' | 'completed' | 'incomplete'

const initialTasks: Task[] = [
  { id: '1', title: 'Собрать каркас на Vite и TypeScript', completed: true },
  { id: '2', title: 'Разложить проект по слоям FSD', completed: true },
  { id: '3', title: 'Настроить ESLint, Prettier и алиасы', completed: true },
  { id: '4', title: 'Сделать сущность Task и карточку', completed: true },
  { id: '5', title: 'Собрать список с фильтрами и удалением', completed: true },
  { id: '6', title: 'Вывести задачи на странице через виджет', completed: true },
  { id: '7', title: 'Вынести кнопку фильтра в shared', completed: true },
  { id: '8', title: 'Перейти ко второму уроку', completed: false },
  { id: '9', title: 'Погладить кота', completed: false },
]

export function useTasks(initial: Task[] = initialTasks) {
  const [allTasks, setAllTasks] = useState<Task[]>(initial)
  const [filter, setFilter] = useState<Filter>('all')

  const tasks = useMemo(() => {
    if (filter === 'completed') return allTasks.filter((task) => task.completed)
    if (filter === 'incomplete') return allTasks.filter((task) => !task.completed)
    return allTasks
  }, [allTasks, filter])

  const removeTask = useCallback((id: string) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== id))
  }, [])

  return { tasks, filter, setFilter, removeTask }
}
