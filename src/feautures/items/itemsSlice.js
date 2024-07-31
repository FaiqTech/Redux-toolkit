// src/features/items/itemsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  currentItem: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    editItem: (state, action) => {
      const { id, newItem } = action.payload;
      const index = state.list.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.list[index] = newItem;
      }
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

export const { addItem, editItem, deleteItem, setCurrentItem } =
  itemsSlice.actions;

export default itemsSlice.reducer;
