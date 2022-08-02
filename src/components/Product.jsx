import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../style/product.css";
import image from '../assets/1629738591-masteri-west-heights.png'

const Product = ({ products }) => {
  const [data, setData] = useState(products);

  const filterItem = (catItem) => {
    const result = products.filter((product) => {
      return product.type.value === catItem;
    });
    setData(result);
  };
  
  return (
    <>
      <div className="category">
        <button
          autoFocus
          className="category__all"
          onClick={() => setData(products)}
        >
          Tất Cả
        </button>
        <button
          className="category__apartment"
          onClick={() => filterItem("chungcu")}
        >
          Chung cư
        </button>
        <button
          className="category__villa"
          onClick={() => filterItem("bietthu")}
        >
          Biệt thự
        </button>
        <button
          className="category__shophouse"
          onClick={() => filterItem("shophouse")}
        >
          Shophouse
        </button>
        <button
          className="category__condotel"
          onClick={() => filterItem("condotel")}
        >
          Condotel
        </button>
      </div>
      <div className="product">
        {data.map((product, index) => {
          return (
            <NavLink
              to={`/details/${product.id}`}
              className="product__item"
              key={index}
            >
              <div className="product__item--img">
                <img src={image} alt='anhloi'></img>
                <div className="item__img-wrp">
                  <span className="item__img--type">{product.type.name}</span>
                  <div className="item__img-boder">
                    <span className="item__img--like">
                      <FaHeart />
                    </span>
                  </div>
                </div>
              </div>
              <div className="product__item--desc">
                <h5 className="product__item--name">{product.title}</h5>
                <p className="product__item--address">{product.address}</p>
                <p className="product__item--prince">
                  Giá từ: <span>{product.price.to}</span> -
                  <span>{product.price.from} Tỷ</span>
                </p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Product;
