import "./ShoppingCart.css";
import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useContext(CartContext);
  const handleClose = () => {
    closeCart();
  };

  if (isOpen)
    return (
      <>
        <div id="shopping-cart">
          <div id="cart-header">
            <h2>Cart</h2>
            <button className="btn-close" onClick={() => handleClose()}>
              X
            </button>
          </div>
          <div id="cart-content">
            <ul id="cart-items">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </ul>
            <div id="pay">
              <div id="total-price">
                <h3>Total to pay:</h3>
                <h3>$$$</h3>
              </div>
              <button id="cart-checkout">Checkout</button>
            </div>
          </div>
        </div>
        <div id="overlay" onClick={() => handleClose()}></div>
      </>
    );
};

export default ShoppingCart;
