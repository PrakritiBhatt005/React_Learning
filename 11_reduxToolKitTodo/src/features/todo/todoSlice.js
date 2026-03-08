import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',  //Redux Slice Name to avoid any confusion
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),         //nanoid() generates unique id(s)
                text: action.payload //Payload is the data carried inside a Redux action that is used by reducers to update the state.
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer