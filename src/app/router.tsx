import { createBrowserRouter } from 'react-router'
import { ProtectedRoute } from 'features/authRouting'
import { TaskPage } from 'pages/tasks'
import { RegisterPage } from 'pages/register'
import { RefsPage } from 'pages/refs'
import { LoginPage } from 'pages/login'
import { ProfilePage } from 'pages/profile'
import { PublicPage } from 'pages/public'

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
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/public',
    element: <PublicPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
])
