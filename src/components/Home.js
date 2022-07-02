import React from "react";
import { useState } from "react";
import { products } from "./products";
import Main from "./Main";
function Home() {
  const [product, setproducts] = useState(products);
  return (
    <div className="row">
      {product.map((m) => (
        <Main prod={m} />
      ))}
    </div>
  );
}

export default Home;
