import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    toDoListState: [],
  },
  reducers: {
    createToDo: (state) => {
      state.toDoListState.push({ text: "", done: false });
    },
    addToDo: (state, action) => {
      const { index, text } = action.payload;
      state.toDoListState[index] = {
        ...state.toDoListState[index],
        text,
        done: false,
      };
    },
    doneToDo: (state, action) => {
      const { index } = action.payload;
      state.toDoListState[index] = {
        ...state.toDoListState[index],
        done: !state.toDoListState[index].done,
      };
    },
    deleteToDo: (state, action) => {
      const { index } = action.payload;
      state.toDoListState = state.toDoListState.filter(
        (_, idx) => idx !== index
      );
    },
    deleteAllToDo: (state) => {
      state.toDoListState.length = 0;
    },
  },
});

export const selectToDo = (state) => state.todo.toDoListState;

export const { createToDo, addToDo, doneToDo, deleteToDo, deleteAllToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
