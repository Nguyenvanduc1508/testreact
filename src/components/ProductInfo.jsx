import React from 'react';
import slider from '../assets/1589335835-vphoto--6.jpg'

const ProductInfo = ({product}) => {
  return (
    <div className='productinfo'>
        <div className='productinfo__slider'>
          <img src={slider}></img>
        </div>
        <div className='productinfo__details'>
          <div className='productinfo__details--info'>
            <div className='productinfo__details-left'>
              <h1 className='details__left--name'>{product.title}</h1>
              <p className='details__left--address'>{product.address}</p>
              <p className='details__left--area'>Diện tích: {product.area}m2</p>
            </div>
            <div className='productinfo__details-right'>
              <h1>{product.price.to} - {product.price.from} tỷ</h1>
            </div>
          </div>
          <div className='productinfo__details--ttct'>
              <h2>Thông tin chi tiết</h2>
              <p className='details__ttct--desc'>{product.description}</p>
          </div>
        </div>  
    </div>
  )
}

export default ProductInfo