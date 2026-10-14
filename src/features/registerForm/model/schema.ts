import { z } from 'zod'

export const registerSchema = z
  .object({
    username: z.string().min(1, 'Укажите имя пользователя'),
    email: z.email('Email должен содержать @'),
    password: z.string().min(6, 'Пароль не короче 6 символов'),
    confirmPassword: z.string().min(1, 'Повторите пароль'),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  })

export type RegisterValues = z.infer<typeof registerSchema>
