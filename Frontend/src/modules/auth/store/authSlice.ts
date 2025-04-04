import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  status: boolean;
}

const initialState: AuthState = {
  status: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.status = true;
    },
    logout: (state) => {
      state.status = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
