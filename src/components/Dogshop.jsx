import React from "react";
import { useDispatch } from "react-redux";
import PetShopcard from "./Petshopcard";
import { addToCart } from "./redux/CartAction";
import { dogcloth, dogfood } from "../data/shopdata";
const Dogshop=_=>{
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
        <h1 id="dheading">Welcome to our dog shop!</h1>
        <PetShopcard
      mainHeading="Dog clothes"
      items={dogcloth}
      addToCart={handleAddToCart}
      addToFavorites={handleAddToFavorites}
    />
     
     <PetShopcard
      mainHeading="Dog Food"
      items={dogfood}
      addToCart={handleAddToCart}
      addToFavorites={handleAddToFavorites}
    />
    </div>

)
}
export default Dogshop;