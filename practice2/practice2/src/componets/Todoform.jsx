import {useState} from "react";

function TodoForm() {
const {addTodo}=useContext(Context);
const [todo,setTodo]=useState("")

const add=(e)=>{
    e.preventDefault();
    if(!todo) return

    addTodo({id:Date.now(),todo:todo,completed:false})
    setTodo("")
}

return (
<>
<input onSubmit={add}
 type="text"
  placeholder="Write Todo..."
  value={todo}
  onChange={(e)=>setTodo(e.target.value)}
  
  />

<button type="submit">Add</button>
</>
)

}

export default TodoForm;