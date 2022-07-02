import React from 'react'
import { useState } from "react";
import { products } from "../products";
import Card from "../components/Card"
import Header from "../components/Header"
function Home() {
    const [product, setproducts] = useState(products);
  return (
 
    <div className="row">
      {product.map((m) => (
        <Card prod={m} /> 
      ))}
    </div>
    
  )
}

export default Home