import React from 'react'

import logo from './assets/logo.svg'
import './styles/App.css'
import LandingPage from './components/LandingPage'
import { ChatRoom } from './components'
import { User } from './types/types'

class App extends React.Component {
  state: User = {
    username: '',
    loggedIn: false,
    error: ''
  }

  render() {
    const { username, error } = this.state

    const logIn = () => {
      this.setState({ loggedIn: true })
    }

    const logOut = () => {
      this.setState({ loggedIn: false })
    }

    const setUsername = (username: string) => {
      this.setState({ username })
    }

    const setError = (error: string) => {
      this.setState({ error })
    }

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.loggedIn ? (
          <ChatRoom username={username} logOut={logOut} setError={setError} />
        ) : (
          <LandingPage setUsername={setUsername} logIn={logIn} error={error} setError={setError} />
        )}
      </div>
    )
  }
}

export default App
