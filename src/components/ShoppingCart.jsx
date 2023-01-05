import "./ShoppingCart.css";
import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const ShoppingCart = () => {
  const { closeCart } = useContext(CartContext);
  const handleClose = () => {
    closeCart();
  };
  return (
    <>
      <div id="shopping-cart">
        <div id="cart-header">
          <h2>Cart</h2>
          <button className="btn-close" onClick={() => handleClose()}>
            X
          </button>
        </div>
        <div id="shopping-list"></div>
        <div id="pay">
          <div id="price">
            <h6>Total to pay:</h6>
            <h6>$$$</h6>
          </div>
          <button className="btn-orange">Checkout</button>
        </div>
      </div>
      <div id="overlay" onClick={() => handleClose()}></div>
    </>
  );
};

export default ShoppingCart;
