import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";

/* Products */
import Products from "../components/products/Products";
import ProductShow from "../components/products/Product";

/* Cart */
import Cart from "../components/cart/Cart";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductShow />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
export default AppRoutes;
