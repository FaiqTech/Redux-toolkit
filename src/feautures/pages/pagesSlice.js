// src/features/pages/pagesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: [
    { id: 1, title: "Page 1" },
    { id: 2, title: "Page 2" },
    { id: 3, title: "Page 3" },
  ],
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {},
});

export default pagesSlice.reducer;
