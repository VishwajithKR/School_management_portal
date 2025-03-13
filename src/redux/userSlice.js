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
      email: "tt@tt.tt",
      role: "teacher",
      password: "tttt",
    },
    {
      name: "",
      email: "ss@ss.ss",
      role: "student",
      password: "ssss",
    },{
      name: "",
      email: "aa@aa.aa",
      role: "admin",
      password: "pppp",
    },{
      name: "",
      email: "pp@pp.pp",
      role: "principal",
      password: "pppp",
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
