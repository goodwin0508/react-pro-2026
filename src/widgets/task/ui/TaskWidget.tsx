import { TaskList, useTasks } from 'features/taskList'

export function TaskWidget() {
  const { tasks, filter, setFilter, removeTask } = useTasks()

  return <TaskList tasks={tasks} filter={filter} onFilterChange={setFilter} onRemove={removeTask} />
}
