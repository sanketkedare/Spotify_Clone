import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    loggedIn: false,
    details: {},
  },
};
const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.user.loggedIn = true;
      state.user.details = action.payload;

    },
    login: (state, action) => {
        state.user.loggedIn = true;
        state.user.details = action.payload;


      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = {
        loggedIn: false,
        details: {},
      };
    },
  },
});
export const { signUpUser, login, logoutUser } = authSlice.actions;
export default authSlice.reducer;
