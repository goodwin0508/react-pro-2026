export type User = {
  id: string
  name: string
  email: string
  about?: string
  avatarPath?: string
}

export type AuthContextValue = {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null
  signIn: (token: string, user: User) => void
  signOut: () => void
}
