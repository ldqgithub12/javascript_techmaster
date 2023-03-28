import { createSlice } from '@reduxjs/toolkit'

const initialState =[
    {id : 1, title : "Làm bài tập"},
    {id : 2, title : "Đi chơi"},
    {id : 3, title : "Đá bóng"},
    
];
const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state,action){
        state.push(action.payload)
    },
    deleteTodo(state,action){
        const index = state.findIndex(todo=>todo.id == action.payload);
        state.splice(index,1);
    }
  }
});

export const {addTodo,deleteTodo} = todoSlice.actions

export default todoSlice.reducer