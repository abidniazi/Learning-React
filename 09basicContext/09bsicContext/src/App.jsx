import { useState } from 'react'

import UserContext from './context/Usercontext'
import UserContextProvider from './context/Usercontextprovider'

import Login from './components/login'
import Profile from './components/profile'
function App() {

  return (
  <UserContextProvider> 
  <h1>Api Context</h1>
  <Login/>
  <Profile/>
  </UserContextProvider>
  )
}

export default App
