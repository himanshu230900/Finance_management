import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../modules/user/store/userSlice";
import authReducer from "../modules/auth/store/authSlice";
import loadReducer from "./loadSlice";

const rootReducer = combineReducers({
  user: userReducer, 
  auth: authReducer,
  load: loadReducer,
});

export default rootReducer;