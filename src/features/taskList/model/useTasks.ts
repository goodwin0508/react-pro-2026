import { useCallback, useEffect, useMemo, useState } from 'react'
import { useGetTasksQuery } from 'entities/task'
import type { Task } from 'entities/task'

export type Filter = 'all' | 'completed' | 'incomplete'

export function useTasks() {
  const { data, isLoading, isError } = useGetTasksQuery()

  const [allTasks, setAllTasks] = useState<Task[] | null>(null)
  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    if (data && allTasks === null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAllTasks(data)
    }
  }, [data, allTasks])

  const tasks = useMemo(() => {
    const list = allTasks ?? []
    if (filter === 'completed') return list.filter((task) => task.completed)
    if (filter === 'incomplete') return list.filter((task) => !task.completed)
    return list
  }, [allTasks, filter])

  const removeTask = useCallback((id: number) => {
    setAllTasks((prev) => (prev === null ? prev : prev.filter((task) => task.id !== id)))
  }, [])

  return { tasks, filter, setFilter, removeTask, isLoading, isError }
}
