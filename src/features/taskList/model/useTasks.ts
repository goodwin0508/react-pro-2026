import { useState } from 'react'
import type { Task } from 'entities/task'

export type Filter = 'all' | 'completed' | 'incomplete'

const initialTasks: Task[] = [
  { id: '1', title: 'Прочитать про FSD', completed: true },
  { id: '2', title: 'Сделать карточку задачи', completed: false },
  { id: '3', title: 'Собрать список с фильтрами', completed: false },
  { id: '4', title: 'Настроить линтер под слои', completed: true },
]

export function useTasks(initial: Task[] = initialTasks) {
  const [allTasks, setAllTasks] = useState<Task[]>(initial)
  const [filter, setFilter] = useState<Filter>('all')

  const tasks = allTasks.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'incomplete') return !task.completed
    return true
  })

  const removeTask = (id: string) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return { tasks, filter, setFilter, removeTask }
}
