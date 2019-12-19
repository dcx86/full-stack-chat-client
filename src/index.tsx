import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { SocketService } from './SocketService'
import { ChatContext } from './ChatContext'
import * as serviceWorker from './serviceWorker'

const chat = new SocketService()

ReactDOM.render(
  <ChatContext.Provider value={chat}>
    <App />
  </ChatContext.Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
