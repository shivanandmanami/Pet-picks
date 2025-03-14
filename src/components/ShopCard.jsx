import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import '../css/shopcard.css'
const ShopCard = (props) => {
  const { products } = props;

  return (
    <div className="shopCard">
      {products.map((product, index) => (
        <div key={index} className="pet-shop-cont">
          <img src={product.imageSrc} alt={`Product ${index + 1}`} />
          <h3 id='ch3'>{product.title}</h3>
          <p id='cp3'>{product.price}</p>
          <button id='cartbutton'>Add to cart</button>
          <button id='favbutton'><HeartOutlined/></button>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
