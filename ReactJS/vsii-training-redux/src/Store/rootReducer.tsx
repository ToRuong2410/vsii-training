// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Couter/counterSlice";
import todosReducer from "../Features/todos/todosSlice";
import breedsSlice from "../Features/breeds/breedsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    breeds: breedsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
