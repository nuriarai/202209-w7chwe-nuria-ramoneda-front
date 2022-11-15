import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUserData } from "../../../types/types";

const initialState: LoginUserData = {
  id: "",
  username: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (previousUser, action: PayloadAction<LoginUserData>) => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (previousUser) => ({
      ...initialState,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
