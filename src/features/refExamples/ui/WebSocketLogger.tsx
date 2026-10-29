import { useEffect, useRef } from 'react'
import styles from './refExamples.module.css'

const SOCKET_URL = 'wss://echo.websocket.org'

export function WebSocketLogger() {
  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    const socket = new WebSocket(SOCKET_URL)
    socketRef.current = socket

    socket.onopen = () => {
      console.log('WebSocketLogger: соединение открыто')
      socket.send('Привет из WebSocketLogger')
    }

    socket.onmessage = (event) => {
      console.log('WebSocketLogger: сообщение', event.data)
    }

    return () => {
      socketRef.current?.close()
      console.log('WebSocketLogger: соединение закрыто')
    }
  }, [])

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>WebSocketLogger</h2>
    </section>
  )
}
