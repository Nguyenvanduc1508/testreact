import React from "react";
import "../style/slider.css";
import slider from "../assets/bg-hero_2x.webp";
import { FaSearch, FaAngleLeft, FaAngleUp, FaAngleRight } from "react-icons/fa";

const Slider = () => {
  return (
    <div className="slider">
      <img src={slider}></img>
      <h1>Sàn giao dịch bất động sản</h1>
      <div className="slider__fillter">
        <div className="slider__fillter--details">
          <div className="fillter__details--conscious">
            <p className="conscious">Tỉnh</p>
            <div className="conscious__select">
              <div className="conscious__select--wrp">
                <span>Chọn tỉnh</span>
                <span>
                  <FaAngleUp />
                </span>
                <div className="conscious__select--sub">
                  <p>Đà Nẵng</p>
                  <p>Hà Nội</p>
                  <p>Hồ Chí Minh</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fillter__details--area">
            <p className="area">Diện tích</p>
            <div className="conscious__area--wrp">
              <span>Chọn diện tích</span>
              <span>
                <FaAngleUp />
              </span>
              <div className="conscious__select--sub">
                  <p className="flex-icon"><span className="icon-fillter"><FaAngleLeft /></span>30 m2</p>
                  <p>30 - 35 m2</p>
                  <p>45 - 60 m2</p>
                  <p className="flex-icon"><span className="icon-fillter"><FaAngleRight /></span>60 m2</p>
                </div>
            </div>
          </div>
        </div>
        <div className="slider-fillter--search">
          <span className="fillter__search--first">
            <FaSearch />
          </span>
          <span className="fillter__search--last">Tìm kiếm</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
