import {
  ClickTimer,
  DebouncedLogger,
  FocusTracker,
  PreviousInput,
  WebSocketLogger,
} from 'features/refExamples'
import styles from './RefsPage.module.css'

export function RefsPage() {
  return (
    <div className={styles.page}>
      <h1>Примеры useRef</h1>
      <ClickTimer />
      <PreviousInput />
      <FocusTracker />
      <DebouncedLogger />
      <WebSocketLogger />
    </div>
  )
}
