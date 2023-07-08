import { useState, createContext } from "react";
import ShoppingCart from "../components/ShoppingCart";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  const increaseCartQt = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null)
        return [...currentItems, { id, quantity: 1 }];
      else
        return currentItems.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity + 1 };
          else return item;
        });
    });
  };

  const decreaseCartQt = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1)
        return currentItems.filter((item) => item.id !== id);
      else
        return currentItems.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity - 1 };
          else return item;
        });
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseCartQt,
        decreaseCartQt,
        removeFromCart,
        openCart,
        closeCart,
        setCartItems,
      }}
    >
      {children}

      <ShoppingCart isOpen={isOpen} />
    </CartContext.Provider>
  );
}

export default CartContext;
