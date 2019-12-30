import React, { Component } from 'react'

import './ChatRoom.css'
import { ChatContext } from '../../context/ChatContext'
import { ChatState, ChatMessage } from '../../types/types'

type OwnProps = {
  username: string
}

type Props = OwnProps

class ChatRoom extends Component<Props> {
  static contextType = ChatContext

  state: ChatState = {
    messages: [
      {
        message: 'Welcome! Type a message and press Send Message to continue the chat.',
        author: 'Bot'
      }
    ],
    input: ''
  }

  componentDidMount() {
    this.context.init()
    const observable = this.context.onMessage()

    observable.subscribe((m: ChatMessage) => {
      let messages = this.state.messages
      messages.push(m)

      this.setState({ messages: messages })
    })
  }

  componentWillUnmount() {
    this.context.disconnect()
  }

  render() {
    const { username } = this.props

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ input: e.target.value })
    }

    const handleMessage = (): void => {
      const author: string = username

      if (this.state.input !== '') {
        this.context.send({
          message: this.state.input,
          author: author
        })
        this.setState({ input: '' })
      }
    }

    let msgIndex = 0

    return (
      <>
        <div className="ChatRoom-chatbox">
          {this.state.messages.map((msg: ChatMessage) => {
            msgIndex++
            return (
              <div key={msg.author}>
                <p>{msg.author}</p>
                <p>{msg.message}</p>
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
          <button
            onClick={() => {
              handleMessage()
            }}
          >
            Send Message
          </button>
        </p>
      </>
    )
  }
}

export default ChatRoom
