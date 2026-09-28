import { createBrowserRouter } from 'react-router'
import { TaskPage } from 'pages/tasks'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskPage />,
  },
])
