import { createBrowserRouter } from 'react-router'
import { TaskPage } from 'pages/tasks'
import { RegisterPage } from 'pages/register'
import { RefsPage } from 'pages/refs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/refs',
    element: <RefsPage />,
  },
])
