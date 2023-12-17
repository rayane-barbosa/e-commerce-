import { CartProvider } from "../context/cartContext/CartContext";
import { UserProvider } from "../context/userContext/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp;
