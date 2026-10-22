import { useEffect, useRef, useState } from 'react'
import styles from './refExamples.module.css'

export function PreviousInput() {
  const [value, setValue] = useState('')
  const previousRef = useRef('')

  useEffect(() => {
    previousRef.current = value
  }, [value])

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>PreviousInput</h2>
      <label className={styles.label} htmlFor="previous-input">
        Введите текст
      </label>
      <input
        id="previous-input"
        className={styles.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p className={styles.value}>
        {/* eslint-disable-next-line react-hooks/refs */}
        Предыдущее значение: {previousRef.current || '—'}
      </p>
    </section>
  )
}
