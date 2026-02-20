
import { useState } from 'react'
import Context from './context/Context'

function App() {
const [todos, setTodos] = useState([])
  const addTodo=(todo)=>{
    setTodos(prev=>[{id:Date.now(),todo},...prev])
  }


  return (
  <Context.Provider value={{
    todos:[],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{}
  }}>

  <h1>Todo App</h1>
<div>
  todos form here 
</div>

<div> 
  todo list here
  </div>

  </Context.Provider>
  )
}

export default App
