import { RegisterForm } from 'features/registerForm'
import { SubscribeWizard } from 'features/subscribeWizard'
import styles from './RegisterPage.module.css'

export function RegisterPage() {
  return (
    <div className={styles.page}>
      <h1>Регистрация</h1>
      <RegisterForm />
      <SubscribeWizard />
    </div>
  )
}
