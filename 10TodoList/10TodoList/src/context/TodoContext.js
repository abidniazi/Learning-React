import { createContext,useContext } from "react";

const TodoContext = createContext();
export default TodoContext;

export const useTodoContext = () => {
    
return useContext(TodoContext);    
}

export const Todoprovider=TodoContext.Provider

