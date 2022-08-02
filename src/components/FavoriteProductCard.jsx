import React from "react";
import "../style/favorite.css";
import { FaHeart } from "react-icons/fa";
import img from "../assets/1613985209-tong-quan-co-duong.jpg";

const FavoriteProductCard = () => {
  return (
    <div className="favorite">
      <h1>DANH SÁCH ƯA THÍCH</h1>
      <div className="favorite__product">
        <div className="product__item ">
          <div className="product__item--img">
            <img src={img}></img>
          </div>
          <div className="product__item--desc">
            <h5 className="product__item--name">alo</h5>
            <p className="product__item--address">alo</p>
            <p className="product__item--type">Chung Cư</p>
            <p className="product__item--prince">
              Giá từ: <span>1</span> -<span>5 Tỷ</span>
            </p>
            <div className="delete_like">
              <button>DELETE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProductCard;
