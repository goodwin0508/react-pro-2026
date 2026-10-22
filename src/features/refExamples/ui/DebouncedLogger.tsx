import { useEffect, useRef } from 'react'
import type { ChangeEvent } from 'react'
import styles from './refExamples.module.css'

export function DebouncedLogger() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      console.log(`DebouncedLogger: ${text}`)
    }, 1000)
  }

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    },
    [],
  )

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>DebouncedLogger</h2>
      <input className={styles.input} onChange={handleChange} placeholder="Введите текст" />
    </section>
  )
}
