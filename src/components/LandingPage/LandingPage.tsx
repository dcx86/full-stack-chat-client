import React, { Component } from 'react'

import './LandingPage.css'
import { ChatContext } from '../../context/ChatContext'

type OwnProps = {
  logIn: () => void
  setUsername: (username: string) => void
}

type State = {
  username: string
  error: string
}

type Props = OwnProps

class LandingPage extends Component<Props> {
  static contextType = ChatContext

  state: State = {
    username: '',
    error: ''
  }

  render() {
    const { username, error } = this.state
    const { logIn, setUsername } = this.props

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ username: e.target.value })
    }

    const setError = (error: string) => {
      this.setState({ error })
    }

    const enterChat = () => {
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
