import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import genreReducer from "./genreSlice"

const appStore = configureStore({
  reducer: {
    authSlice: authReducer,
    genre: genreReducer,
  },
});

export default appStore;
