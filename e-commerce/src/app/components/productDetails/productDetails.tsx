import React, { useState } from "react";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";

interface IProductDetailsProps {
    image: string;
    name: string;
    price: number;
}

export const ProductDetails = (props: IProductDetailsProps) => {
    const [item, setItem] = useState();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const cartItem = {
            item: setItem,
            quantity: quantity,
        };
        console.log(cartItem);
    };

    return (
        <div>
            <h3>{props.name}</h3>
            <Image src={props.image} alt={props.name} width={200} height={200}/>
            <p>${props.price}</p>
            <BsCartPlus onClick={handleAddToCart}/> 
                      


            

        </div>

    );


}