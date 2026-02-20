import {useState, useRef, useEffect} from "react";
import { useContext } from "react";
import Context from "../context/Context";
import gsap from "gsap";

function TodoForm() {
const {addTodo}=useContext(Context);
const [todo,setTodo]=useState("")
const [loading, setLoading] = useState(false);
const buttonRef = useRef(null);

const add=(e)=>{
    e.preventDefault();
    if(!todo.trim()) {
      // Shake animation for empty input
      gsap.to(buttonRef.current, {
        x: -5,
        duration: 0.1,
        yoyo: true,
        repeat: 3,
      });
      alert('Please enter a todo!');
      return;
    }

    setLoading(true);
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.2,
    });
    
    setTimeout(() => {
      addTodo({todo: todo.trim(), completed:false});
      setTodo("");
      setLoading(false);
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.2,
      });
    }, 300);
}

return (
<form onSubmit={add} className="flex gap-3">
  <input
    type="text"
    placeholder="What needs to be done today? ✍️"
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    className="input-field flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-800 placeholder-gray-400 transition-all duration-300 text-base"
    style={{'fontFamily': 'Poppins', 'fontWeight': '500'}}
  />

  <button 
    ref={buttonRef}
    type="submit"
    disabled={loading || !todo.trim()}
    className="btn-primary px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-300 active:scale-95"
    style={{'fontFamily': 'Poppins', 'fontWeight': '600'}}
  >
    {loading ? (
      <>
        <span className="animate-spin">⏳</span>
        Adding...
      </>
    ) : (
      <>
        <span>➕</span>
        Add
      </>
    )}
  </button>
</form>
)

}

export default TodoForm;