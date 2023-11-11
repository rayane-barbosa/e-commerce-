import React from "react";
import { ProductDetails } from "./productDetails";

const products = [
  {
    image:
      "https://static.timtimcopos.com.br/produto-data/2019.05.08-22.16.47-0_p.jpg",
    name: "TESTE DE RENDERIZAÇÃO DE PRODUTO",
    price: 100,
  },
  {
    image:
      "https://static.timtimcopos.com.br/produto-data/2019.05.08-22.16.47-0_p.jpg",
    name: "ANOTHER PRODUCT #1",
    price: 50,
  },

  {
    image:
      "https://static.timtimcopos.com.br/produto-data/2019.05.08-22.16.47-0_p.jpg",
    name: "ANOTHER PRODUCT #2",
    price: 50,
  },

  {
    image:
      "https://static.timtimcopos.com.br/produto-data/2019.05.08-22.16.47-0_p.jpg",
    name: "ANOTHER PRODUCT #3",
    price: 50,
  },

  // Add more products here
];

export const ProductCatalog = () => {
  return (
    <div className="product-catalog">
      {products.map((product, index) => (
        <ProductDetails
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};
