import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/body.css";
import '../style/product.css'
import Product from "../components/Product";
import Slider from "./Slider";
const Body = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <div className="body">
      <Slider />
      <div className="body__wrp">
        <h3>SẢN PHẨM</h3>
        <Product products={products} />
      </div>
    </div>
  );
};

export default Body;
