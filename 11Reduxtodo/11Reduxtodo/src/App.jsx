import { useState } from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'


function App() {

  return (
    <>
    <h1>Redux Todo App</h1>
    <Addtodo/>
    <Todos/>
    </>
  )
}

export default App
