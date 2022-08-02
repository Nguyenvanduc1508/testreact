import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from './ProductInfo';
import '../style/details.css';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`)
            .then((res) => setProduct(res.data))
    }, [id]);
  return (
    <div>
        {product && <ProductInfo product={product} />}
    </div>
  )
}

export default ProductDetails;