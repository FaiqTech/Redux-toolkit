// src/features/items/ItemInput.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem, setCurrentItem } from "./itemsSlice";
import { Modal } from "reactstrap";

const ItemInput = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const currentItem = useSelector((state) => state.items.currentItem);
  const [name, setName] = useState("");

  useEffect(() => {
    if (currentItem) {
      setName(currentItem.name);
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem) {
      dispatch(
        editItem({ id: currentItem.id, newItem: { id: currentItem.id, name } })
      );
      dispatch(setCurrentItem(null));
    } else {
      dispatch(addItem({ id: Date.now(), name }));
    }
    setName("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
        />
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default ItemInput;
