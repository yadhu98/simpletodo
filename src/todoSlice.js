import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("todostate", state.todos, action.payload);
      state.todos.push(action.payload);
    },
    editTodo: (state, action) => {
      const { index, title, description } = action.payload;
      console.log("in", index);
      state.todos[index] = { title, description };
    },
    deleteTodo: (state, action) => {
      const idx = action.payload;
      console.log(idx);
      state.todos = [
        ...state.todos.slice(0, idx),
        ...state.todos.slice(idx + 1),
      ];
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
