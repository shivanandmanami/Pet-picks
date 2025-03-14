import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./redux/CartAction";
import "../css/cart.css";

function Cart() {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.cart.items);

  // Convert the quantity and price to numbers
  const subtotal = itemList.reduce(
    (acc, item) => acc + parseFloat(item.price) * parseInt(item.quantity, 10),
    0
  );
  const salesTaxRate = 0.1;
  const salesTax = subtotal * salesTaxRate;
  const total = subtotal + salesTax;

  return (
    <>
      <h1 className="Cart-h">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="cart-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        My Cart
      </h1>
      <div className="Cart">
        <table>
          <thead>
            <tr>
              <th>Item No.</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="item-info">
                    <img
                      className="Cart-img"
                      src={item.image}
                      alt={item.name}
                    />
                    <p id="p-name">{item.name}</p>
                    <button
                      id="remove"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </p>
                    </button>
                  </div>
                </td>
                <td id="qtyy">
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="in-button"
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="de-button"
                  >
                    -
                  </button>
                </td>
                <td>Rs{parseFloat(item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total">
          <h2>Subtotal: {subtotal}</h2>
          <h2>Sales Tax: {salesTax}</h2>
          <h2>Total: {total}</h2>
          <button className="Cart-button">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
