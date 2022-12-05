import { createContext, useState, useEffect } from "react";

// Adds item to our cart
const addToCart = (cartItems, itemToAdd) => {
  // Return a new array containing our current cartItems and Add the new item to the end
  return [...cartItems, { ...itemToAdd }];
};

//Values we are accessing
export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addToCart(cartItems, itemToAdd));
  };

  // Passing our context values to access in child components
  const value = { cartItems, cartCount, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
