// src/features/darkMode/darkModeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    enabled: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.enabled = !state.enabled;
      document.body.classList.toggle("dark-mode", state.enabled);
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
