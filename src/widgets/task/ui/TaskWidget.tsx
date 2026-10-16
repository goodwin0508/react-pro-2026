import { TaskList, useTasks } from 'features/taskList'

export function TaskWidget() {
  const { tasks, filter, setFilter, removeTask, isLoading, isError } = useTasks()

  if (isLoading) return <p>Загрузка…</p>
  if (isError) return <p>Не удалось загрузить задачи</p>

  return <TaskList tasks={tasks} filter={filter} onFilterChange={setFilter} onRemove={removeTask} />
}
