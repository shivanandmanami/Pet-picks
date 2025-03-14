import React from "react";
import PetShopcard from "./Petshopcard";
import '../css/dogshop.css';
import { addToCart } from "./redux/CartAction";
import { useDispatch } from "react-redux";
import { catProductsData } from "../data/shopdata";
const CatShop = () => {
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
      <h1 id="dheading">Welcome to our Cat Shop!</h1>
      <PetShopcard
        mainHeading="Cat Food"
        items={catProductsData}
        addToCart={handleAddToCart}
        addToFavorites={handleAddToFavorites}
      />
    </div>

  )
}
export default CatShop;