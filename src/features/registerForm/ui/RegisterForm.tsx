import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../model/schema'
import type { RegisterValues } from '../model/schema'
import styles from './RegisterForm.module.css'

const fields = [
  { name: 'username', label: 'Имя пользователя', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Пароль', type: 'password' },
  { name: 'confirmPassword', label: 'Подтверждение пароля', type: 'password' },
] as const

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: '', email: '', password: '', confirmPassword: '' },
  })

  const onSubmit = () => {
    reset()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {fields.map((field) => (
        <label key={field.name} className={styles.field}>
          <span className={styles.label}>{field.label}</span>
          <input
            className={errors[field.name] ? styles.inputError : styles.input}
            type={field.type}
            {...register(field.name)}
          />
          {errors[field.name] && <span className={styles.error}>{errors[field.name]?.message}</span>}
        </label>
      ))}

      <button className={styles.submit} type="submit">
        Зарегистрироваться
      </button>

      {isSubmitSuccessful && <p className={styles.success}>Регистрация прошла успешно</p>}
    </form>
  )
}
