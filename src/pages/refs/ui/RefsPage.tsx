import { ClickTimer } from 'features/refExamples'
import styles from './RefsPage.module.css'

export function RefsPage() {
  return (
    <div className={styles.page}>
      <h1>Примеры useRef</h1>
      <ClickTimer />
    </div>
  )
}
