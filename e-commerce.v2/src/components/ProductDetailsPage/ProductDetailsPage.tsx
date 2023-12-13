/*Deverá abrir o produto com a imagem mais ampliada.
Nome do produto.
Preço.
Quantidade a ser lançada no carrinho.
Botão para adicionar este produto ao carrinho.*/

import React from "react";
import {
  ProductDetailsButton,
  ProductDetailsContainer,
} from "./ProductDetailsPage.styles";

interface ProductDetailsProps {
  name: string;
  price: number;
  quantity: number;
  addToCart: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  price,
  quantity,
  addToCart,
}) => {
  return (
    <ProductDetailsContainer>
      <img src={"https://picsum.photos/200"} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <ProductDetailsButton onClick={addToCart}>
        Add to Cart
      </ProductDetailsButton>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
