import { useRef } from 'react'
import type { FocusEvent } from 'react'
import styles from './refExamples.module.css'

export function FocusTracker() {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  const switchCountRef = useRef(0)

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const cameFromField =
      event.relatedTarget === firstRef.current || event.relatedTarget === secondRef.current

    if (!cameFromField) {
      return
    }

    switchCountRef.current += 1
    console.log(`FocusTracker: переходов фокуса ${switchCountRef.current}`)
  }

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>FocusTracker</h2>
      <div className={styles.row}>
        <input ref={firstRef} className={styles.input} onFocus={handleFocus} placeholder="Первое" />
        <input
          ref={secondRef}
          className={styles.input}
          onFocus={handleFocus}
          placeholder="Второе"
        />
      </div>
      <button className={styles.button} type="button" onClick={() => firstRef.current?.focus()}>
        Сфокусировать на первом
      </button>
    </section>
  )
}
