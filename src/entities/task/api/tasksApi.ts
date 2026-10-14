import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Task } from '../model/types'

type TodoDto = {
  id: number
  title: string
  completed: boolean
}

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Tasks'],
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => 'todos',
      transformResponse: (response: TodoDto[]) =>
        response.map(({ id, title, completed }) => ({ id, title, completed })),
      providesTags: ['Tasks'],
    }),
  }),
})

export const { useGetTasksQuery } = tasksApi
