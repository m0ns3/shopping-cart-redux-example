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
    fetch(`${API_URL}/cart.json`, {
      method: "PUT",
      body: JSON.stringify(cart),
    });
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
