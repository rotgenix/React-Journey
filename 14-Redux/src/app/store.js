import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice';
// here we are importing reducer from todoSlice file

export const store = configureStore({
    reducer: todoReducer
});