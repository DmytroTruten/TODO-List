import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    toDoListState: [],
  },
  reducers: {
    createToDo: (state) => {
      state.toDoListState.push({ text: "" });
      console.log("create");
    },
    addToDo: (state, action) => {
      const { index, text } = action.payload;
      state.toDoListState[index] = { text };
      console.log("add");
    },
  },
});



export const selectToDo = (state) => state.todo.toDoListState;

export const { createToDo, addToDo } = toDoSlice.actions;

export default toDoSlice.reducer;

