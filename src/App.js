import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  const API_URL = process.env.REACT_APP_API_URL_FIREBASE;

  useEffect(() => {
    sendCartData = async () => {
      const response = await fetch(`${API_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      const responseData = await response.json();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
