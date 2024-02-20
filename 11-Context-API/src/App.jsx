import React from 'react'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './component/Login'
import Profile from './component/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React Context App</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App