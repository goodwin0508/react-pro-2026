import { useActionState } from 'react'
import { initialSubscribeState, subscribeAction } from '../model/subscribe'
import styles from './SubscribeWizard.module.css'

export function SubscribeWizard() {
  const [state, formAction, isPending] = useActionState(subscribeAction, initialSubscribeState)

  return (
    <form className={styles.wizard} action={formAction}>
      <h2 className={styles.title}>Подписка на рассылку</h2>

      {state.step === 'email' && (
        <label className={styles.field}>
          <span className={styles.label}>Шаг 1. Ваш email</span>
          <input
            className={state.error ? styles.inputError : styles.input}
            type="email"
            name="email"
            defaultValue={state.email}
          />
        </label>
      )}

      {state.step === 'confirm' && (
        <p className={styles.text}>
          Шаг 2. Подтвердите подписку для <b>{state.email}</b>
        </p>
      )}

      {state.step === 'done' ? (
        <p className={styles.success}>Готово — письмо отправлено на {state.email}</p>
      ) : (
        <button className={styles.submit} type="submit" disabled={isPending}>
          {isPending ? 'Отправляем…' : state.step === 'email' ? 'Далее' : 'Подтвердить'}
        </button>
      )}

      {state.error && <span className={styles.error}>{state.error}</span>}
    </form>
  )
}
