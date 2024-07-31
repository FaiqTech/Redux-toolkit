// src/features/items/ItemList.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, setCurrentItem } from "./itemsSlice";
import ItemInput from "./ItemInput";

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.list);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (item) => {
    dispatch(setCurrentItem(item));
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    dispatch(setCurrentItem(null));
    setIsModalOpen(true);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ItemInput isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ItemList;
