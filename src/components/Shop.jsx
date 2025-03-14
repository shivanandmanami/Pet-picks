import React from "react";
import "../css/shop.css";
import { Link } from "react-router-dom";
import '../css/shopcard.css'
import { productsData } from "../data/shopdata";
import { HeartOutlined, SearchOutlined } from "@ant-design/icons";
import { addToCart } from "./redux/CartAction";
import { useDispatch, useSelector } from 'react-redux'
const Shop = () => {
    const dispatch=useDispatch()
    const handleAddToCart = (item) => {
        // Dispatch the addToCart action with the item as payload
        dispatch(addToCart(item));
      };
      return(
    <div className="shop">
        <div className="categories">
            <div className='csearch-bar' style={{ display: "flex", justifyContent: "center" }}>
                <input
                    placeholder="Search for products"
                    prefix={<SearchOutlined />}
                    className="csearch-input"
                />
                <div className="csicon">
                    <SearchOutlined />
                </div>
            </div><br />
            <div className="categories-list">
                <h2 id="lheading">Categories</h2><br />
            <ul style={{listStyle:"none"}}>
                
                    <li><Link to='/dogshop' id="link">Dogs</Link></li>
                    <li><Link to='/fishshop'id="link">Fish</Link></li>
                <li><Link to='/catshop'id="link">Cats</Link></li>
                    <li><Link to='/birdshop' id="link">Birds</Link></li>
                </ul><br />
                    
                
            </div>
        </div>
        <div className="shopCard">
      {productsData.map((product, index) => (
        <div key={index} className="pet-shop-cont">
          <img src={product.image} alt=''/>
          <h3 id='ch3'>{product.name}</h3>
          <p id='cp3'>{product.price}</p>
          <button id='cartbutton' onClick={() => handleAddToCart(product)}>Add to cart</button>
          <button id='favbutton'><HeartOutlined/></button>
        </div>
      ))}
        </div>
    </div>
)};
export default Shop;