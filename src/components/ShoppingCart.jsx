import "./ShoppingCart.css";
import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";
import processors from "../data/items.json";
import { Link } from "react-router-dom";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useContext(CartContext);
  const hasItems = cartItems.length > 0;

  if (isOpen)
    return (
      <>
        <div id="shopping-cart">
          <div id="cart-header">
            <h2>Cart</h2>
            <button className="btn-close" onClick={() => closeCart()}>
              X
            </button>
          </div>
          {hasItems && (
            <div id="cart-content">
              <ul id="cart-items">
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
                <Link to="/checkout">
                  <button id="cart-checkout" onClick={() => closeCart()}>
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
          {!hasItems && (
            <h3 style={{ textAlign: "center", marginTop: "100%" }}>
              Cart is empty
            </h3>
          )}
        </div>
        <div id="overlay" onClick={() => closeCart()}></div>
      </>
    );
};

export default ShoppingCart;
