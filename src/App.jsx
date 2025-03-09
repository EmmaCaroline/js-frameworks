import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Contact from "./components/Contact";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import { CartProvider } from "./components/ui/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
