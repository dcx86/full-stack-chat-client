import React, { Component } from 'react'

import './LandingPage.css'
import { User } from '../../types/types'

type OwnProps = {
  logIn: () => void
  setUsername: (username: string) => void
}
type Props = OwnProps

class LandingPage extends Component<Props> {
  state: Partial<User> = {
    username: ''
  }

  render() {
    const { username } = this.state

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ username: e.target.value })
    }

    const { logIn, setUsername } = this.props

    const enterChat = () => {
      if (!username) return
      setUsername(username)
      logIn()
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
      </>
    )
  }
}

export default LandingPage
