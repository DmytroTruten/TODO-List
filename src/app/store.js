import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./ToDoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
