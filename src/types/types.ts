export interface ChatMessage {
  username: string
  message: string
}

export interface ChatState {
  input: string
  messages: ChatMessage[]
}

export interface User {
  username: string
  loggedIn: boolean
  error: string
}
