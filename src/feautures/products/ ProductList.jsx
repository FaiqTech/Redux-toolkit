// src/features/products/ProductList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.products.filter);
  const products = useSelector((state) => state.products.list);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
