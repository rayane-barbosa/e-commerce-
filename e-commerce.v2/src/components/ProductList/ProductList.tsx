import React from "react";
import { ProductCard, ProductWrapper, StyledLink } from "./ProductList.styles";
import { UserContext } from "../../context/userContext/UserContext";

const products = [
  { id: 1, name: "Produto 1", price: 100, image: "https://picsum.photos/200" },
  { id: 2, name: "Produto 2", price: 200, image: "https://picsum.photos/200" },
  { id: 3, name: "Produto 3", price: 200, image: "https://picsum.photos/200" },
  { id: 4, name: "Produto 4", price: 200, image: "https://picsum.photos/200" },
  { id: 5, name: "Produto 1", price: 100, image: "https://picsum.photos/200" },
  { id: 6, name: "Produto 2", price: 200, image: "https://picsum.photos/200" },
  { id: 7, name: "Produto 3", price: 200, image: "https://picsum.photos/200" },
  { id: 8, name: "Produto 4", price: 200, image: "https://picsum.photos/200" },
  { id: 9, name: "Produto 1", price: 100, image: "https://picsum.photos/200" },
  { id: 10, name: "Produto 2", price: 200, image: "https://picsum.photos/200" },
  { id: 11, name: "Produto 3", price: 200, image: "https://picsum.photos/200" },
  { id: 12, name: "Produto 4", price: 200, image: "https://picsum.photos/200" },
];

const ProductList: React.FC = () => {
  const { updateCart } = React.useContext(UserContext);

  const addToCart = (product, quantity) => {
    updateCart(product, quantity);
    console.log(product, quantity);
  };

  const sendoToDetailsPage = () => {
    window.location.href = "/product-details/{product.id}";
  };
  return (
    <ProductWrapper>
      {products.map((product) => (
        <StyledLink href={`/product/${product.id}`} key={product.id}>
          {" "}
          {/* Usando o StyledLink em vez do Link */}
          <ProductCard>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>R$ {product.price}</p>
            <input
              type="number"
              defaultValue="0"
              min="0"
              id={`quantity-${product.id}`}
            />
            <button
              onClick={(e) => {
                e.stopPropagation(); // Previne a navegação quando o botão é clicado
                addToCart(
                  product,
                  (
                    document.getElementById(
                      `quantity-${product.id}`
                    ) as HTMLInputElement
                  ).value
                );
              }}
            >
              Adicionar ao carrinho
            </button>
          </ProductCard>
        </StyledLink>
      ))}
    </ProductWrapper>
  );
};

export default ProductList;
