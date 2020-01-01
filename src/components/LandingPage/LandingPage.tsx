import React, { Component } from 'react'

import './LandingPage.css'
import { ChatContext } from '../../context/ChatContext'

type OwnProps = {
  logIn: () => void
  setUsername: (username: string) => void
  setError: (error: string) => void
  error: string
}

type State = {
  username: string
}

type Props = OwnProps

class LandingPage extends Component<Props> {
  static contextType = ChatContext

  state: State = {
    username: ''
  }

  render() {
    const { username } = this.state
    const { logIn, setUsername, setError, error } = this.props

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ username: e.target.value })
    }

    const enterChat = () => {
      this.context.init()
      this.context.join(username, setError, logIn)
      setUsername(username)
    }

    return (
      <>
        <input
          className="LandingPage-Textarea"
          placeholder="Type your nickname here..."
          onChange={updateInput}
          value={this.state.username}
        />
        <p>
          <button onClick={enterChat}>Enter chatroom</button>
        </p>
        <p>{error}</p>
      </>
    )
  }
}

export default LandingPage
