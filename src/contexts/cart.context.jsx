import { createContext, useState, useEffect } from "react";

// Adds item to our cart
const addToCart = (cartItems, itemToAdd) => {
  //If already inside our cart then increment quantity only
  const alreadyInCart = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  //if in cart then increase its quanity
  if (alreadyInCart) {
    // If it exists, update quantity by adding the quantity from itemToAdd to our existing quantity, else return cartItem unchanged
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + itemToAdd.quantity } : cartItem
    );
  }

  // Return a new array containing our current cartItems and Add the new item object to the end
  return [...cartItems, { ...itemToAdd }];
};

//Creates new list with items that are not equal to itemToRemove's id
const removeFromCart = (cartItems, itemToRemove) => {
  // console.log("inside removeFromCart, cartItems: ", cartItems);
  // console.log("itemToRemove: ", itemToRemove);
  const newCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);

  return newCartItems;
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

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeFromCart(cartItems, itemToRemove));
  };

  useEffect(() => {
    // Holds # of items
    const newCartCount = cartItems.length;
    console.log("current Cart Count: ", newCartCount);
    setCartCount(newCartCount);
  }, [cartCount]);
  // Passing our context values to access in child components
  const value = { cartItems, cartCount, addItemToCart, removeItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
