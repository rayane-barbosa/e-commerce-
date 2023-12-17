"use client";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext/CartContext";

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, updateCart } =
    useContext(CartContext);

  if (!cart) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      {cart.items.map((item) => (
        <div key={item.id}>
          <img
            src={`https://picsum.photos/200?random=${item.id}`}
            alt={item.name}
          />
          <h2>{item.name}</h2>
          <p>R${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => addToCart(item)}>Add another</button>
          <button onClick={() => removeFromCart(item.id)}>
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
