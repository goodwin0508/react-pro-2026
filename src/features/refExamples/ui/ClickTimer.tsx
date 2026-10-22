import { useRef } from 'react'
import styles from './refExamples.module.css'

interface ClickData {
  startTime: number | null
  clickCount: number
}

export function ClickTimer() {
  const clickDataRef = useRef<ClickData>({ startTime: null, clickCount: 0 })

  const handleClick = () => {
    const data = clickDataRef.current
    data.clickCount += 1

    if (data.startTime === null) {
      data.startTime = Date.now()
      console.log('ClickTimer: первый клик, отсчёт пошёл')
      return
    }

    console.log(
      `ClickTimer: прошло ${Date.now() - data.startTime} мс, кликов ${data.clickCount}`,
    )
  }

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>ClickTimer</h2>
      <button className={styles.button} type="button" onClick={handleClick}>
        Кликнуть
      </button>
    </section>
  )
}
