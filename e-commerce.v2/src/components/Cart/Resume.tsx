"use client";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ResumeProps {
  products: Product[];
}

const Resume: React.FC<ResumeProps> = ({ products }) => {
  const cartContext = useContext(CartContext);

  const handleFinalizePurchase = () => {
    // cartContext.finalizePurchase();
    alert("Finalizando compra");
  };

  return (
    <div>
      <h2>Cart Summary</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleFinalizePurchase}>Finalize Purchase</button>
    </div>
  );
};

export default Resume;
