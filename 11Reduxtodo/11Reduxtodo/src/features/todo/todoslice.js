import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:"Learn React",
    }]
}

export const todoslice=createSlice({
name:"todos",
initialState,
reducers:{
     addTodo:(state,action)=>{
    const todo={
        id:nanoid(),
                text:action.payload
    }
    state.todos.push(todo)
     },
     removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
     }

}

})

export const {addTodo,removeTodo} =todoslice.actions

export default todoslice.reducer