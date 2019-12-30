export interface ChatMessage {
  author: string
  message: string
}

export interface ChatState {
  input: string
  messages: ChatMessage[]
}

export interface User {
  nickname: string
}

export interface Auth {
  loggedIn: boolean
}
