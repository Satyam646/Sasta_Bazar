import React from "react";
import HomePage from "../../Pages/HomePage/homePage";
import ProductPage from "../../Pages/Productpage/ProductPage";
import Cart from "../../Pages/Cart/Cart";
import { Routes, Route, BrowserRouter } from "react-router-dom";
export default function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
