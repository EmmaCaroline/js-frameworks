import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import NotFound from "./components/NotFound";

function App() {

  return (
    <> {/* Comment */}
    <Routes>
      <Route index element={<Home />} />
      <Route path="products" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <h1>Test</h1>
    </>
  )
}

export default App
