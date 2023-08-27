import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    toDoListState: [],
  },
  reducers: {
    createToDo: (state) => {
      state.toDoListState.push({ text: "", done: false });
      console.log("create");
    },
    addToDo: (state, action) => {
      const { index, text } = action.payload;
      state.toDoListState[index] = {
        ...state.toDoListState[index],
        text,
        done: false,
      };
      console.log("add");
    },
    DoneToDo: (state, action) => {
      const { index } = action.payload;
      state.toDoListState[index] = {
        ...state.toDoListState[index],
        done: !state.toDoListState[index].done,
      };
      console.log("done");
    },
    deleteToDo: (state, action) => {
      const { index } = action.payload;
      state.toDoListState = state.toDoListState.filter(
        (_, idx) => idx !== index
      );
      console.log("delete", index);
    },
  },
});

export const selectToDo = (state) => state.todo.toDoListState;

export const { createToDo, addToDo, DoneToDo, deleteToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
