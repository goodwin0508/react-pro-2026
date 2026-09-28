import styles from './FilterButton.module.css'

type Props = {
  label: string
  active: boolean
  onClick: () => void
}

export function FilterButton({ label, active, onClick }: Props) {
  return (
    <button className={active ? styles.buttonActive : styles.button} onClick={onClick}>
      {label}
    </button>
  )
}
