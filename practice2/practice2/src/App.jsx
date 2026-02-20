
import { useState,useEffect, useRef } from 'react'
import Context from './context/Context'
import TodoForm from './componets/Todoform'
import Todolist from './componets/Todolist'
import './App.css'
import gsap from 'gsap'

function App({todo}) {
const [todos, setTodos] = useState([])
const containerRef = useRef(null);

  const addTodo=(todo)=>{
    setTodos(prev=>[{id:Date.now(),todo:todo.todo,completed:false},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos(prev=>prev.map(item=>item.id===id?{...item,todo}:item))
  }

  const deleteTodo=(id)=>{
    setTodos(prev=>prev.filter(item=>item.id!==id))
  }

  useEffect(()=>{
const todos=JSON.parse(localStorage.getItem("todos") )

if(todos && todos.length>0){
setTodos(todos)
}
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

useEffect(() => {
  if (containerRef.current) {
    gsap.fromTo(
      containerRef.current.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }
}, []);

  return (
  <Context.Provider value={{
    todos,
    addTodo,
    updateTodo,
    deleteTodo
  }}>
    <div className="todo-container" ref={containerRef}>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-10">
          <h1 className="text-5xl font-bold text-white mb-2" style={{'fontFamily': 'Poppins', 'fontWeight': '700', 'letterSpacing': '0.5px'}}>✨ My Todo App</h1>
          <p className="text-blue-50 text-lg" style={{'fontFamily': 'Poppins', 'fontWeight': '300', 'letterSpacing': '0.5px'}}>Stay organized and productive</p>
        </div>

        {/* Form Section */}
        <div className="p-8 border-b border-gray-100">
          <TodoForm/>
        </div>

        {/* List Section */}
        <div className="p-8">
          {todos && todos.length > 0 ? (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6" style={{'fontFamily': 'Poppins', 'fontWeight': '700'}}>📋 Your Todos ({todos.length})</h2>
              {todos.map((todo) => (
                <div key={todo.id} className="todo-item">
                  <Todolist todo={todo}/>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No todos yet. Add one to get started!</p>
              <p className="text-gray-300 text-sm mt-2">✨ Your to-do list is empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </Context.Provider>
  )
}

export default App
