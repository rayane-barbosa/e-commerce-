"use client";
import { useContext } from "react";
import BannerHome from "../components/BannerHome/BannerHome";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { CartContext } from "../context/cartContext/CartContext";

const Home: React.FC = () => {
  const { addToCart } = useContext(CartContext);

  const handleProductClick = (product: {
    id: number;
    name: string;
    price: number;
    image: string;
  }): void => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div>
      <Header />
      <BannerHome />
      <ProductList onProductClick={handleProductClick} />
      <Footer />
    </div>
  );
};

export default Home;
