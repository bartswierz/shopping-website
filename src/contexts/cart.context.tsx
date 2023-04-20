import { createContext, useState, useEffect, ReactNode } from "react";

interface ProductDetails {
  brandName: string;
  color: string;
  discountPrice: number;
  id: number;
  imageUrl: string;
  originalPrice: number;
  productName: string;
  quantity: number;
  size: string;
  starRating: number;
  subheader: string;
  totalReviews: number;
}

// interface CartItems extends ItemToAdd {
//   cartItems: ItemToAdd;
// }
// Adds item to our cart
const addToCart = (cartItems: ProductDetails[], itemToAdd: ProductDetails) => {
  //If already inside our cart then increment quantity only
  // const alreadyInCart = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);
  console.log("cartItems: ", cartItems);
  const alreadyInCart = cartItems.find(
    (cartItem: ProductDetails) =>
      cartItem.id === itemToAdd.id && cartItem.color === itemToAdd.color && cartItem.size === itemToAdd.size
  );

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
const removeFromCart = (cartItems: ProductDetails[], itemToRemove: ProductDetails) => {
  // console.log("inside removeFromCart, cartItems: ", cartItems);
  // console.log("itemToRemove: ", itemToRemove);
  const newCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);

  return newCartItems;
};

interface CartItems {
  cartItems: ProductDetails[];
  cartCount: number;
  cartTotal: number;
  taxTotal: number;
  addItemToCart: (itemToAdd: ProductDetails) => void;
  removeItemFromCart: (itemToRemove: ProductDetails) => void;
  updateCartItem: (cartItemToUpdate: ProductDetails, newQuantity: number) => void;
}

//Values we are accessing
export const CartContext = createContext<CartItems>({
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  taxTotal: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateCartItem: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  // Using ProductDetails as the ProductDetails contains all information needed to render within our cart page
  const [cartItems, setCartItems] = useState<ProductDetails[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);

  const addItemToCart = (itemToAdd: ProductDetails) => {
    console.log("itemToAdd: ", itemToAdd);
    console.log("itemToAdd type: ", typeof itemToAdd);
    setCartItems(addToCart(cartItems, itemToAdd));
  };

  const removeItemFromCart = (itemToRemove: ProductDetails) => {
    setCartItems(removeFromCart(cartItems, itemToRemove));
  };

  const updateCartCount = (numberOfItems: number) => {
    // setCartCount({ cartCount: cartCount + numberOfItems });
    setCartCount(cartCount + numberOfItems);
  };

  const updateCartItem = (cartItemToUpdate: ProductDetails, newQuantity: number) => {
    //set item quantity to new quantity
    const updatedCartItems = cartItems.map((cartItem: ProductDetails) =>
      cartItem.id === cartItemToUpdate.id ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  // Updates cart item count using reducer that adds up item.quantity value
  useEffect(() => {
    //Each time we add item to cart using the "add to cart" button, we will run this reducer that will add up all quantity of items and set that to our current cart count
    //reduce(accumulator value, currentValue in list) => accumulator + currentValue, initial value of 0(starting point)
    const newCartCount = cartItems.reduce((totalItems, currentItem) => totalItems + currentItem.quantity, 0);
    // console.log("current Cart Count: ", newCartCount);
    setCartCount(newCartCount);
  }, [cartCount, cartTotal, cartItems]);

  // Updates total cost using reducer
  useEffect(() => {
    //Updates Cart Total Cost
    // const newCartTotal = cartItems.reduce((totalCost, currentItem) => totalCost + currentItem.discountPrice * currentItem.quantity, 0);
    const newCartTotal = cartItems.reduce((totalCost, currentItem) => totalCost + currentItem.discountPrice * currentItem.quantity, 0);
    setCartTotal(newCartTotal);
  }, [cartItems, cartCount, cartTotal]);

  // Updates tax by total cost multiplied by 10%
  useEffect(() => {
    // console.log("updating tax total: ", taxTotal);
    setTaxTotal(cartTotal * 0.1);
  }, [cartCount, cartTotal, taxTotal]);

  // Passing our context values to access in child components
  const value = { cartItems, cartCount, cartTotal, addItemToCart, removeItemFromCart, updateCartCount, updateCartItem, taxTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
