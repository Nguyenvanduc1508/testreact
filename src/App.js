import React from "react";
import { Route, Routes } from "react-router-dom";
import FavoriteProductCard from "./components/FavoriteProductCard";
import ProductDetails from "./components/ProductDetails";
import Body from "./UI/Body";
import Header from "./UI/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/like/" element={<FavoriteProductCard />} />
      </Routes>
    </div>
  );
};

export default App;
