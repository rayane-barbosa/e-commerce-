import BannerHome from "../components/BannerHome/BannerHome";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <BannerHome />
      <ProductList
        onProductClick={function (product: {
          id: number;
          name: string;
          price: number;
          image: string;
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </div>
  );
};

export default Home;
