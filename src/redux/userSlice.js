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
      name: "teacher_1",
      email: "tt@tt.tt",
      role: "teacher",
      password: "tttt",
    },
    {
      name: "student_1",
      email: "ss@ss.ss",
      role: "student",
      password: "ssss",
    },{
      name: "admin_1",
      email: "aa@aa.aa",
      role: "admin",
      password: "aaaa",
    },{
      name: "principal_1",
      email: "pp@pp.pp",
      role: "principal",
      password: "pppp",
    }]
    ,
    userData: [{
      name: "",
      email: "",
      role: "",
      password: "",
    },
    {
      name: "teacher_1",
      email: "tt@tt.tt",
      role: "teacher",
      password: "tttt",
    },
    {
      name: "student_1",
      email: "ss@ss.ss",
      role: "student",
      password: "ssss",
    },{
      name: "admin_1",
      email: "aa@aa.aa",
      role: "admin",
      password: "aaaa",
    },{
      name: "principal_1",
      email: "pp@pp.pp",
      role: "principal",
      password: "pppp",
    }],
  },
  reducers: {
    createAccount: (state, action) => {
      state.registerData = [...state.registerData, action.payload];
      state.userData = [...state.registerData, action.payload];
    },
    loginAccount: (state, action) => {
     state.registerData = [action.payload]
    },
    logoutAccount: (state) => {
      state.registerData = state.userData;
    },
  },
});

export const { createAccount ,loginAccount,logoutAccount} = userSlice.actions;
export default userSlice.reducer;
