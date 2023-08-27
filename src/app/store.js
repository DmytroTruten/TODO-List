import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./ToDoSlice";

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todo-list", serializedState);
  } catch {
    console.error("Error saving state to localStorage:", err);
  }
};
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("todo-list");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

const initialState = loadStateFromLocalStorage();

export const store = configureStore({
  reducer: {
    todo: toDoReducer,
  },
  preloadedState: initialState,
});

saveStateToLocalStorage(store.getState());

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

