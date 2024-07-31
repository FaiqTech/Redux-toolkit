// src/features/form/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    submitForm: (state) => {
      console.log("Form Data:", state);
    },
  },
});

export const { setName, setEmail, setPassword, submitForm } = formSlice.actions;

export default formSlice.reducer;
