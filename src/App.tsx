import React from 'react'

import logo from './assets/logo.svg'
import './styles/App.css'
import LandingPage from './components/LandingPage'
import { ChatRoom } from './components'
import { Auth } from './types/types'

class App extends React.Component {
  state: Auth = {
    loggedIn: false
  }

  render() {
    const logIn = () => {
      this.setState({ loggedIn: true })
    }

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.loggedIn ? <ChatRoom /> : <LandingPage logIn={logIn} />}
      </div>
    )
  }
}

export default App
