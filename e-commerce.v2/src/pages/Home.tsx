import BannerHome from "../components/BannerHome/BannerHome";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <BannerHome />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
