import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoaderTypes = {
  isProtectedLoader: boolean;
  isSignUp: boolean;
  isLogIn: boolean;
  isLogOut: boolean;
  isAuthenticating: boolean;
};

const initialState: LoaderTypes = {
  isProtectedLoader: false,
  isSignUp: false,
  isLogIn: false,
  isLogOut: false,
  isAuthenticating: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setIsProtectedLoader: (state, action: PayloadAction<boolean>) => {
      state.isProtectedLoader = action.payload;
    },
    setIsSignUp: (state, action: PayloadAction<boolean>) => {
      state.isSignUp = action.payload;
    },
    setIsLogIn: (state, action: PayloadAction<boolean>) => {
      state.isLogIn = action.payload;
    },
    setIsLogOut: (state, action: PayloadAction<boolean>) => {
      state.isLogOut = action.payload;
    },
    setIsAuthenticating: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticating = action.payload;
    },
  },
});

export const {
  setIsProtectedLoader,
  setIsSignUp,
  setIsLogIn,
  setIsLogOut,
  setIsAuthenticating,
} = loaderSlice.actions;

export default loaderSlice.reducer;
