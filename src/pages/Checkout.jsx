import React from "react";
import processors from "../data/items.json";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div id="checkout">
      <div id="checkout-pay">
        <Link to="/checkout">
          <button id="cart-checkout">Checkout</button>
        </Link>
      </div>
      <div id="checkout-cart">
        <ul id="checkout-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
        <div id="pay">
          <div id="total-price">
            <h3>Total to pay:</h3>
            <h3>
              $
              {cartItems.reduce((total, cartItem) => {
                const item = processors.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
