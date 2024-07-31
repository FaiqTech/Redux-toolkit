// src/features/form/Form.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setPassword, submitForm } from "./formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
