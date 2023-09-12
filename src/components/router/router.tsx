import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Products from "../products/products";
import Product from "../products/product/product";
import About from "../about/about";
import Help from "../help/help";
import NotFound from "../not_found/not_found";
import MainLayout from "../layouts/main_layouts";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>;
        <Route path="/products" element={<Products />}></Route>;
        <Route path="products/:productId" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>;
        <Route path="/help" element={<Help />}></Route>;
        <Route path="*" element={<NotFound />}></Route>;
      </Route>
    </Routes>
  );
};
