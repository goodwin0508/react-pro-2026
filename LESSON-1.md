# LESSON-1 — Архитектура React-приложений (FSD)

Ветка: `lesson-1`

## Запуск

```bash
npm ci
npm run dev     # http://localhost:5173
npm run build
npm run lint
```

## Что сделал

Собрал проект на Vite + React + TypeScript по FSD: слои `app`, `pages`, `widgets`, `features`,
`entities`, `shared`.

- `entities/task` — тип `Task`, карточка `TaskCard`, стили через CSS-модуль
- `features/taskList` — хук `useTasks` (фильтр + удаление) и компонент `TaskList`
- `widgets/task` + `pages/tasks` — виджет и страница
- бонус: `shared/ui/FilterButton`

Границы между слоями держит `eslint-plugin-boundaries`, абсолютные импорты — через `tsconfig` `paths`.

## Чеклист

- [x] Проект запускается без ошибок
- [x] Структура соответствует FSD
- [x] ESLint и Prettier с конфигурацией, отражающей принципы FSD
- [x] Типизация и структура сущности Task
- [x] TaskCard — презентационный компонент
- [x] Стили через `.module.css`
- [x] Хук `useTasks` — фильтрация и удаление
- [x] `TaskList` корректно отображает отфильтрованные задачи
- [x] State-хук и проброс пропсов
- [x] Страница и виджет работают корректно
- [x] Читаемый, чистый и модульный код
- [x] Доп. задание — `FilterButton` в `shared/ui`

## Не сделано / вопросы

- нет
