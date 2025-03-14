import React from 'react';
import { HeartOutlined } from '@ant-design/icons';  // Import the HeartOutlined icon
import '../css/dogshop.css'


const PetClothingItem = (props) => {
  return (
    <div className="pet-cloth-cont">
      <img src={props.image} alt="Pet Clothing" />
      <h3 id="ch3">{props.heading}</h3>
      <p id="cp3">{props.price}</p>
      <button id="cartbutton" onClick={props.addToCart}>Add to cart</button>
      <button id="favbutton" onClick={props.addToFavorites}><HeartOutlined /></button>
    </div>
  );
};

const PetShopcard = (props) => {
  return (
    
    <div className="pet-cloth">
      <h2 id="petheading">{props.mainHeading}</h2>

      {props.items.map((item, index) => (
        <PetClothingItem
          key={item.id}
          image={item.image}
          heading={item.name}
          price={item.price}
          addToCart={() => props.addToCart(item)}
          addToFavorites={() => props.addToFavorites(item)}
        />
      ))}
    </div>
  );
};

export default PetShopcard;
