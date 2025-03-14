import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/CartAction";
import '../css/dogshop.css'
import PetShopcard from "./Petshopcard";
import { fishFoodItems, fishToysItems } from "../data/shopdata";
const Fishshop =()=>{
const dispatch =useDispatch()
  const handleAddToCart = (item) => {
    // Dispatch the addToCart action with the item as payload
    dispatch(addToCart(item));
  };

  const handleAddToFavorites = (index) => {
    // Add your logic for adding to favorites
  };
  
  return (
    <div className="Dogshop">
        <h1 id="dheading">Welcome to our Fish shop!</h1>
        <PetShopcard
      mainHeading="Fish Toys"
      items={fishToysItems}
      addToCart={handleAddToCart}
      addToFavorites={handleAddToFavorites}
    />
     
     <PetShopcard
      mainHeading="Fish Food"
      items={fishFoodItems}
      addToCart={handleAddToCart}
      addToFavorites={handleAddToFavorites}
    />
    </div>

)
}
export default Fishshop;