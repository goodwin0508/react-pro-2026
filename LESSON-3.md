# LESSON-3 — Advanced Redux и асинхронность

Ветка: `lesson-3`

## Запуск

```bash
npm ci
npm run dev     # http://localhost:5173
npm run build
npm run lint
```

## Что сделал

Список задач переехал с локального массива на API: данные тянет RTK Query, один раз
копируются в локальный стейт, удаление работает по копии — кеш запроса не трогаем.

- `shared/api/baseApi` — один `createApi` на приложение, `reducerPath: 'api'`,
  `tagTypes: ['Tasks']`, без эндпоинтов
- `entities/task/api/tasksApi` — `getTasks` через `injectEndpoints`, наружу `useGetTasksQuery`
- `features/taskList/model/useTasks` — загрузка, копия в `useState`, фильтр и `removeTask`
- `app/store` — `baseApi.reducer` и `baseApi.middleware` по одному разу, `Provider` в `main.tsx`

Загрузку и ошибку показывает виджет, список и карточка остались презентационными.

## Отступления от текста задания

- `tasksApi` лежит в `entities/task/api/`, а не в `features/taskList/api/` — так показано
  на диаграмме структуры в самом задании, и по FSD это правильнее
- `baseUrl` взял с `https://` — без протокола запрос уходит на `localhost`
- в бонусе не делал `transformResponse → response.todos`: у jsonplaceholder `/todos`
  отдаёт голый массив, поля `todos` в ответе нет

## Чеклист

- [x] `tasksApi` описан через `createApi`, экспортирует хук `useGetTasksQuery`
- [x] Загрузка задач происходит без ошибок
- [x] `transformResponse` приводит ответ сервера к `Task[]`
- [x] Хук `useTasks` загружает данные через `useGetTasksQuery`
- [x] Задачи отображаются в интерфейсе
- [x] Код структурирован и соответствует FSD
- [x] `useEffect` копирует загруженные задачи в `useState`
- [x] Реализована `removeTask(id: number)`, запросов на сервер нет
- [x] После удаления задача исчезает из UI
- [x] Доп. задание — `baseApi` в `shared/api`, `tagTypes` включает `Tasks`
- [x] Доп. задание — `tasksApi` через `injectEndpoints`, `getTasks` возвращает `Task[]`
- [x] Доп. задание — `baseApi.reducer` и `baseApi.middleware` подключены один раз

## Не сделано / вопросы

- нет
