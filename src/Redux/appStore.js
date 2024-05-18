import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const appStore = configureStore({
  reducer: {
    authSlice: authReducer,
  },
});

export default appStore;
