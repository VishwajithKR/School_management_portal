import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    registerData: [{
      name: "",
      email: "",
      role: "",
      password: "",
    },
    {
      name: "",
      email: "qq@qq.qq",
      role: "teacher",
      password: "qqqq",
    },
    {
      name: "",
      email: "ww@ww.ww",
      role: "student",
      password: "wwww",
    }],
    userData: [],
  },
  reducers: {
    createAccount: (state, action) => {
      state.registerData = [...state.registerData, action.payload];
    },
    loginAccount: (state, action) => {
     state.registerData = [action.payload]
    },
  },
});

export const { createAccount ,loginAccount} = userSlice.actions;
export default userSlice.reducer;
