import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserStateRegister } from "./types";

const initialState: UserStateRegister = {
  id: "",
  username: "",
  password: "",
  email: "",
  picture: "",
  isLogged: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (previousUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const { registerUser: registerUserActionCreator } = usersSlice.actions;
