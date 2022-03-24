import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        items: [
            {
                id:1,
                title:'Buy Fish',
                done:false
            },
            {
                id:2,
                title:'Buy Bird',
                done:true
            },
        ],
    },
    reducers: {
        checkTodo: (state, action) => {
            state.items = state.items.map(todo => todo.id === action.payload ? {...todo , done:!todo.done} : todo)
        },
        addTodo: (state, action) => {
            state.items.push({title:action.payload.title , done:false , id:Math.floor(Math.random()*1000)})
        },
        deleteTodo: (state, action) => {
            const p = state.items.findIndex((item) => item.id === action.payload.id);
            state.items.splice(p, 1);
        },
        editTodo: (state, action) => {
            state.items = state.items.map(todo => todo.id === action.payload.id ? {...todo , title:action.payload.title} : todo)
        },
    },
});

export const { addTodo ,checkTodo, deleteTodo, editTodo } = TodoSlice.actions;
export default TodoSlice.reducer;