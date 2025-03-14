import React from "react";
import '../css/dogshop.css';
import { addToCart } from "./redux/CartAction";
import { useDispatch } from "react-redux";
import PetShopcard from "./Petshopcard";
import { birdFoodItems } from "../data/shopdata";
const Birdshop=_=>{
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
        <h1 id="dheading">Welcome to our Bird shop!</h1>
     <PetShopcard
      mainHeading="Bird Food"
      items={birdFoodItems}
      addToCart={handleAddToCart}
      addToFavorites={handleAddToFavorites}
    />
    </div>

)
}
export default Birdshop;