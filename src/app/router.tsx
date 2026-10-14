import { createBrowserRouter } from 'react-router'
import { TaskPage } from 'pages/tasks'
import { RegisterPage } from 'pages/register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
])
