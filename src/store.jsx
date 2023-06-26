import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);
      if (todoIndex !== -1) {
        state.splice(todoIndex, 1);
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

const store = configureStore({
  reducer: todosSlice.reducer,
});

export default store;
