import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
function Detail() {
  const { id } = useParams();
  const product = products.find((i) => i.id == id);
  return (
    <div>
      <h1>DETAIL OF PRODUCT</h1>
      <h2>Title: {product.name}</h2>
      <h3>Description: {product.title}</h3>
      <h3>Price: {product.price}</h3>
    </div>
  );
}

export default Detail;
