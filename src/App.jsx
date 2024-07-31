// src/App.js
import React from "react";
import Counter from "./feautures/counter/Counter";
import TodoInput from "./feautures/todos/TodoInput";
import TodoList from "./feautures/todos/TodoList";
import Form from "./feautures/form/Form";
import ProductList from "./feautures/products/ ProductList";
import DarkModeToggle from "./feautures/darkMode/DarkModeToggle";
import ItemList from "./feautures/items/ItemList";
import PageList from "./feautures/pages/PageList";
import BookmarksList from "./feautures/bookmarks/BookmarksList";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <TodoInput />
      <TodoList />
      <hr />
      <Form />
      <hr />
      <ProductList />
      <hr />
      <DarkModeToggle />
      <hr />
      ///// /////
      <ItemList />
      <hr />
      ////////////
      <PageList />
      <hr />
      <BookmarksList />
    </div>
  );
}

export default App;
