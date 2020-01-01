import io from 'socket.io-client'
import { ChatMessage } from '../types/types'
import { fromEvent, Observable } from 'rxjs'

export class SocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket

  public init(): SocketService {
    this.socket = io('localhost:8080')
    return this
  }

  public send(message: ChatMessage): void {
    this.socket.emit('message', message)
  }

  public onMessage(): Observable<ChatMessage> {
    return fromEvent(this.socket, 'message')
  }

  public join(username: string, setError: (error: string) => void, logIn: () => void): void {
    this.socket.emit('join', username, (error: string) => {
      if (error) {
        setError(error)
        return
      }
      logIn()
    })
  }

  public leaveChat(m: string): void {
    this.socket.emit('leaveChat', m)
  }
}
