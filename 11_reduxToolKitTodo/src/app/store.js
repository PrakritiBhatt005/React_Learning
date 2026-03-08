import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';  //When you import a default export, you can give it any name you want.

export const store = configureStore({
    reducer: todoReducer                       //reducer: todoSlice.reducer
})