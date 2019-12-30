import React, { Component } from 'react'

import './LandingPage.css'
import { User } from '../../types/types'

type OwnProps = {
  logIn: () => void
}
type Props = OwnProps

class LandingPage extends Component<Props> {
  state: User = {
    nickname: ''
  }

  render() {
    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ nickname: e.target.value })
    }

    const { logIn } = this.props
    const enterChat = () => {
      logIn()
    }

    return (
      <>
        <input
          className="LandingPage-Textarea"
          placeholder="Type your nickname here..."
          onChange={updateInput}
          value={this.state.nickname}
        />
        <p>
          <button onClick={enterChat}>Enter chatroom</button>
        </p>
      </>
    )
  }
}

export default LandingPage
