import { RegisterForm } from 'features/registerForm'
import styles from './RegisterPage.module.css'

export function RegisterPage() {
  return (
    <div className={styles.page}>
      <h1>Регистрация</h1>
      <RegisterForm />
    </div>
  )
}
