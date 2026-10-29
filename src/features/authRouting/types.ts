export type User = {
  _id: string
  name: string
  email: string
  about?: string
  avatar?: string
}

export type AuthContextValue = {
  user: User | null
  token: string | null
  isLoading: boolean
  signIn: (token: string, user: User) => void
  signOut: () => void
}
