// src/features/bookmarks/bookmarksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [], // Bəyənilmiş səhifələrin ID-ləri
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      const pageId = action.payload;
      if (!state.bookmarks.includes(pageId)) {
        state.bookmarks.push(pageId);
      }
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter((id) => id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
