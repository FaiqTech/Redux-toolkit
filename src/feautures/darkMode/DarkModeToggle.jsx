// src/features/darkMode/DarkModeToggle.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./darkModeSlice";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.enabled);

  return (
    <button onClick={() => dispatch(toggleDarkMode())}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
