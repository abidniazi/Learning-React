import { useContext,createContext } from "react";

const Context = createContext({
todos: [
    {
        id:1,
        todo:"name",
        completed:false
    }

],
addTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{}

});
export default Context;

export function useTodoContext(){
    return useContext(Context);
}

