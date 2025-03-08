import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
