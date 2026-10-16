import { baseApi } from 'shared/api'
import type { Task } from '../model/types'

type TodoDto = {
  id: number
  title: string
  completed: boolean
}

export const tasksApi = baseApi.injectEndpoints({
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
