import React from "react";
import { ProductCard, ProductWrapper } from "./ProductList.styles";

const products = [
  { id: 1, name: "Produto 1", price: 100 },
  { id: 2, name: "Produto 2", price: 200 },
  { id: 3, name: "Produto 3", price: 200 },
];

const ProductList: React.FC = () => {
  return (
    <ProductWrapper>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </ProductCard>
      ))}
    </ProductWrapper>
  );
};

export default ProductList;
