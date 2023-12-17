"use client";
import React, { useContext } from "react";
import { ProductCard, ProductWrapper, StyledLink } from "./ProductList.styles";
import { CartContext } from "../../context/cartContext/CartContext";

// [:id].tsx

const products = [
  { id: 1, name: "Produto-1", price: 100, image: "https://picsum.photos/200" },
  { id: 2, name: "Produto-2", price: 200, image: "https://picsum.photos/200" },
  { id: 3, name: "Produto-3", price: 200, image: "https://picsum.photos/200" },
  { id: 4, name: "Produto-4", price: 200, image: "https://picsum.photos/200" },
  { id: 5, name: "Produto-5", price: 100, image: "https://picsum.photos/200" },
  { id: 6, name: "Produto-6", price: 200, image: "https://picsum.photos/200" },
  { id: 7, name: "Produto-7", price: 200, image: "https://picsum.photos/200" },
  { id: 8, name: "Produto-8", price: 200, image: "https://picsum.photos/200" },
];
interface ProductListProps {
  onProductClick: (product: {
    id: number;
    name: string;
    price: number;
    image: string;
  }) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onProductClick }) => {
  const {
    cart,
    quantities,
    addToCart: addToCartContext,
    removeFromCart,
    updateCart,
    setQuantity,
  } = useContext(CartContext);

  const addToCart = (
    item: {
      id: number;
      name: string;
      price: number;
      image: string;
    },
    quantity: string
  ) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: parseInt(quantity),
    };
    addToCartContext(cartItem);

    console.log("CLICOUUU", cart);
    console.log("É O MESMO CLIQUE", cartItem);
  };

  const handleQuantityChange = (
    productId: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuantity(productId, Number(e.target.value));
  };

  return (
    <ProductWrapper>
      {products.map((product) => (
        <StyledLink
          href={`/product/${product.name}_${product.id}`.toLowerCase()}
          key={product.id}
        >
          <ProductCard onClick={() => onProductClick(product)}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>R$ {product.price}</p>
            <input
              type="number"
              value={quantities[product.id] || 0}
              min="0"
              onChange={(e) => handleQuantityChange(product.id, e)}
            />
            <button
              onClick={(e) => {
                e.stopPropagation(); // Previne a navegação quando o botão é clicado
                addToCart(product, quantities[product.id] || 0);
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
