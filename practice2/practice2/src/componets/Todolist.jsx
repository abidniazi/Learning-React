import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import Context from "../context/Context";
import gsap from "gsap";

function Todolist({todo}) {
const {updateTodo,deleteTodo}=useContext(Context);
const [todoMsg,setTodoMsg]=useState(todo.todo);
const [isEditing, setIsEditing] = useState(false);
const [isSaving, setIsSaving] = useState(false);
const todoItemRef = useRef(null);

const gradients = [
  "from-blue-400 to-cyan-300",
  "from-purple-400 to-pink-300",
  "from-green-400 to-emerald-300",
  "from-yellow-400 to-orange-300",
  "from-red-400 to-rose-300",
  "from-indigo-400 to-blue-300",
];

const gradientIndex = todo.id % gradients.length;
const selectedGradient = gradients[gradientIndex];

useEffect(() => {
  if (todoItemRef.current) {
    gsap.fromTo(
      todoItemRef.current,
      {
        opacity: 0,
        y: -50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );
  }
}, []);

const handleUpdate=()=>{
  if(!todoMsg.trim()) {
    alert('Todo cannot be empty!');
    return;
  }
  setIsSaving(true);
  setTimeout(() => {
    updateTodo(todo.id,todoMsg);
    setIsEditing(false);
    setIsSaving(false);
  }, 300);
}

const handleDelete=()=>{
  if(window.confirm('Are you sure you want to delete this todo?')) {
    gsap.to(todoItemRef.current, {
      opacity: 0,
      x: 100,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => deleteTodo(todo.id),
    });
  }
}

const handleCancel=()=>{
  setTodoMsg(todo.todo);
  setIsEditing(false);
}

return (
  <div 
    ref={todoItemRef}
    className={`bg-gradient-to-r ${selectedGradient} rounded-2xl p-0.5 hover:shadow-2xl transition-all duration-500 hover:scale-105 shadow-lg`}
    style={{
      transform: 'translateZ(0)',
      willChange: 'transform, box-shadow',
    }}
  >
    {/* Inner white container with gradient border effect */}
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center gap-4">
        {/* Todo Input/Display */}
        {isEditing ? (
          <input
            type="text"
            value={todoMsg}
            onChange={(e)=>setTodoMsg(e.target.value)}
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 bg-gray-50 font-medium shadow-sm hover:bg-white transition-all duration-300"
            style={{'fontFamily': 'Poppins', 'fontWeight': '500'}}
            autoFocus
          />
        ) : (
          <div className="flex-1 py-1">
            <p className="text-gray-800 font-semibold break-words text-lg" style={{'fontFamily': 'Poppins', 'fontWeight': '600', 'letterSpacing': '0.3px'}}>{todoMsg}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 flex-shrink-0">
          {isEditing ? (
            <>
              <button 
                onClick={handleUpdate}
                disabled={isSaving}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 transition-all duration-300 text-sm flex items-center gap-1 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                style={{'fontFamily': 'Poppins', 'fontWeight': '600'}}
              >
                {isSaving ? '💾' : '✓'} Save
              </button>
              <button 
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                style={{'fontFamily': 'Poppins', 'fontWeight': '600'}}
              >
                ✕ Cancel
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm flex items-center gap-1 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                style={{'fontFamily': 'Poppins', 'fontWeight': '600'}}
              >
                ✏️ Edit
              </button>
              <button 
                onClick={handleDelete}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 text-sm flex items-center gap-1 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                style={{'fontFamily': 'Poppins', 'fontWeight': '600'}}
              >
                🗑️ Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
)
}

export default Todolist;    