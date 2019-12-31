import React, { Component } from 'react'

import './ChatRoom.css'
import { ChatContext } from '../../context/ChatContext'
import { ChatState, ChatMessage } from '../../types/types'

type OwnProps = {
  username: string
  logOut: () => void
}

type Props = OwnProps

class ChatRoom extends Component<Props> {
  static contextType = ChatContext

  state: ChatState = {
    messages: [
      {
        message: 'Welcome! Type a message and press Send Message to continue the chat.',
        username: 'Bot'
      }
    ],
    input: ''
  }

  componentDidMount() {
    const observable = this.context.onMessage()

    observable.subscribe((m: ChatMessage) => {
      let messages = this.state.messages
      messages.push(m)

      this.setState({ messages })
    })
  }

  componentWillUnmount() {
    this.context.disconnect()
  }

  render() {
    const { username, logOut } = this.props
    const { messages } = this.state

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ input: e.target.value })
    }

    const handleMessage = (): void => {
      if (this.state.input !== '') {
        this.context.send({
          message: this.state.input,
          username
        })
        this.setState({ input: '' })
      }
    }

    const leaveChat = (): void => {
      this.context.leaveChat(`${username} has left the chat!`)
      logOut()
    }

    let msgIndex = 0

    return (
      <>
        <button onClick={leaveChat}>Leave chatroom</button>
        <div className="ChatRoom-chatbox">
          {messages.map((m: ChatMessage, index: number) => {
            msgIndex++
            return (
              <div key={index}>
                <p>{m.username}</p>
                <p>{m.message}</p>
              </div>
            )
          })}
        </div>
        <input
          className="ChatRoom-Textarea"
          placeholder="Type your message here..."
          onChange={updateInput}
          value={this.state.input}
        />
        <p>
          <button onClick={handleMessage}>Send Message</button>
        </p>
      </>
    )
  }
}

export default ChatRoom
