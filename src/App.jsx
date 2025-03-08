import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

function App() {

  return (
    <> {/* Fragment */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
