import React from 'react'

import logo from './assets/logo.svg'
import './styles/App.css'
import LandingPage from './components/LandingPage'
import { ChatRoom } from './components'
import { User } from './types/types'

class App extends React.Component {
  state: User = {
    username: '',
    loggedIn: false
  }

  render() {
    const { username } = this.state

    const logIn = () => {
      this.setState({ loggedIn: true })
    }

    const setUsername = (username: string) => {
      this.setState({ username: username })
    }

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.loggedIn ? (
          <ChatRoom username={username} />
        ) : (
          <LandingPage setUsername={setUsername} logIn={logIn} />
        )}
      </div>
    )
  }
}

export default App
