import { useState, createContext } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
// import processors from "../data/items.json";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    //!isOpen &&
    setIsOpen(true);
  };
  const closeCart = () => {
    //isOpen &&
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

  // const calculatePrice = () => {
  //   cartItems.reduce((total, cartItem) => {
  //     const item = processors.find((i) => i.id === cartItem.id);
  //     return total + (item?.price || 0) * cartItem.quantity;
  //   }, 0);
  // };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseCartQt,
        decreaseCartQt,
        removeFromCart,
        openCart,
        closeCart,
        // calculatePrice,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </CartContext.Provider>
  );
}

export default CartContext;
