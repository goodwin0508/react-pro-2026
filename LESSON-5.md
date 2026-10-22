# LESSON-5 — Работа с useRef

Ветка: `lesson-5`

## Запуск

```bash
npm ci
npm run dev     # http://localhost:5173
npm run build
npm run lint
```

Примеры на `/refs`, ссылка — в шапке страницы задач. Вывод идёт в консоль браузера.

## Что сделал

Пять компонентов в `src/features/refExamples/`, каждый про свой приём работы с ref.

- `ClickTimer` — время первого клика и счётчик в одном ref
- `PreviousInput` — поле ввода, под ним предыдущее значение из ref
- `FocusTracker` — два поля и кнопка фокуса, счётчик переходов в ref
- `DebouncedLogger` — лог через секунду после остановки ввода, `setTimeout` в ref
- `WebSocketLogger` — соединение в ref, закрывается в cleanup

Для демонстрации — страница `pages/refs` и роут `/refs`.

## Что понял по ходу

- ref меняется без ререндера, поэтому в нём держат то, что надо помнить, но не показывать
- мутировать объект внутри ref можно: React на него не смотрит
- `prevRef.current = value` надо делать в `useEffect`, иначе предыдущее совпадёт с текущим
- текущее значение в `PreviousInput` всё же в `useState` — без него строка не обновится
- `event.relatedTarget` отличает переход между полями от первого входа в форму
- тип таймера — `ReturnType<typeof setTimeout>`, а не `number`
- в dev StrictMode монтирует дважды, поэтому соединение открывается и закрывается два раза

## Чеклист

- [x] `ClickTimer` — время первого клика фиксируется через ref
- [x] `ClickTimer` — счётчик кликов в ref, без ререндера
- [x] `ClickTimer` — в консоли разница во времени и общее количество
- [x] `PreviousInput` — текущее значение отслеживается через `onChange`
- [x] `PreviousInput` — предыдущее значение хранится в ref
- [x] `PreviousInput` — UI показывает предыдущее значение
- [x] `FocusTracker` — фокус ставится через `ref.current.focus()`
- [x] `FocusTracker` — переход фокуса отслеживается через `onFocus`
- [x] `FocusTracker` — количество переходов выводится в консоль
- [x] Доп. задание — `DebouncedLogger` на `setTimeout` в ref с очисткой старого таймера
- [x] Доп. задание — `WebSocketLogger` с соединением в ref и закрытием в cleanup

## Не сделано / вопросы

- нет
