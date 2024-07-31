// store.js: Bütün reducerləri bir yerə toplamaq və configureStore funksiyası ilə
// mağazamızı yaratmaq üçün istifadə olunur.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feautures/counter/counterSlice";
import todosReducer from "../feautures/todos/todosSlice";
import formReducer from "../feautures/form/formSlice";
import productReducer from "../feautures/products/productSlice";
import darkModeReducer from "../feautures/darkMode/darkModeSlice";
import itemsReducer from "../feautures/items/itemsSlice";
import pagesReducer from "../feautures/pages/pagesSlice";
import bookmarksReducer from "../feautures/bookmarks/bookmarksSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    form: formReducer,
    products: productReducer,
    darkMode: darkModeReducer,
    items: itemsReducer,
    pages: pagesReducer,
    bookmarks: bookmarksReducer,
  },
});
