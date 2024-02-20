import { createSlice, nanoid } from '@reduxjs/toolkit';

// simply todos array
const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,   //refering from above line no 4
    reducers: {
        addTodo: (state, action) => {
            // this is todo same which we are storing in line 3 obje's array
            const todo = {
                id: nanoid(),
                text: action.payload // todo string data
            };
            state.todos.push(todo)  // state is refering to initialState line no 4 variable
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
});


export const { addTodo, removeTodo } = todoSlice.actions;
// here todoSlice.actions is refering to reducers

export default todoSlice.reducer;
// here reducer is refering to reducers