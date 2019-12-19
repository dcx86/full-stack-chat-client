import React, { useContext } from 'react'
import { SocketService } from './SocketService'

export const ChatContext: React.Context<SocketService> = React.createContext(new SocketService())

export const useChat = () => useContext(ChatContext)
