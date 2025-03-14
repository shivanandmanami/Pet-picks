import React from "react";
import '../css/home.css';
import leo from "../assets/images/slide dog.png";
import bird from "../assets/images/toys/bird-light.svg"
import cat from "../assets/images/toys/cat-light.svg"
import fish from "../assets/images/toys/fish-light.svg"
import dog from "../assets/images/toys/dog-light.svg"
import { addToCart } from "./redux/CartAction";
import { HeartOutlined } from "@ant-design/icons";
import { homedata } from "../data/shopdata";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch=useDispatch()
    
      const handleAddToCart = (item) => {
        dispatch(addToCart(item));
      };
    
      const handleAddToFavorites = (index) => {
        // Add your logic for adding to favorites
      };
    return (
        <div className="Home">

            <div className="box">
                <div className="boxtext">
                    BEST <br />
                    DESTINATION FOR <br />
                    <p>YOUR PETS</p>
                </div>
                <div class="boximg">
  
        <img id="leo" src={leo} alt="Front Image" />
     
    
</div>
                <Link to='/shop' className="shopnow shopnow1"><button className="shopnow">Shop Now</button></Link>
            </div>
            <div className="menu2">
                <div className="menu2-content">
                    
                   <Link to='/birdshop'><img src={bird}  id="mimg"/></Link> <h5>Bird Shop</h5>
                </div>
                <div className="menu2-content">
                    <Link to='/dogshop'><img src={dog}  id="mimg"/></Link>
                    <h5>Dog Shop</h5>
                </div>
                <div className="menu2-content">
                  <Link to='/fishshop'><img src={fish} id="mimg" fill=""/></Link>
                    
                    <h5>Fish Shop</h5>
                </div>
                <div className="menu2-content">
                    
                    <Link to='/catshop'><img src={cat}  id="mimg"/></Link>
                    <h5>Cat Shop</h5>
                </div>
            </div>
            <div className="pet-cloth">
            {homedata.map((product, index) => ( 
               <div className="pet-cloth-cont" key={index} >   
      <h2 id="petheading">Our Products</h2>
      <Link to='/shop'><button className="shopnow" id="petshopicon" >Shop Now</button></Link>  
           
      <img src={product.image} alt="Pet Clothing" />
      <h3 id="ch3">{product.name}</h3>
      <p id="cp3">{product.price}</p>
      <button id="cartbutton" onClick={() => handleAddToCart(product)}>Add to cart</button>
      <button id="favbutton" onClick=''><HeartOutlined /></button>
    </div>
    ))}</div>
      </div>

    )

}
export default Home;