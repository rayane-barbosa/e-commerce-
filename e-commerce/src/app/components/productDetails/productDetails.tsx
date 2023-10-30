import React, { useState } from "react";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import { set } from "react-hook-form";

interface IProductDetailsProps {
  image: string;
  name: string;
  price: number;
}

export const ProductDetails = (props: IProductDetailsProps) => {
  let [cart, setCart] = useState([]);
  let [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCart([...cart, props.name, props.price, props.image]);
    setCount(count + 1);
    console.log(cart, count);
  };

  return (
    <div>
      <h3>{props.name}</h3>
      <Image src={props.image} alt={props.name} width={200} height={200} />
      <p>${props.price}</p>
      <button onClick={handleAddToCart}>
        <BsCartPlus /> Add to Cart
      </button>
      <p>{count}</p>
    </div>
  );
};
