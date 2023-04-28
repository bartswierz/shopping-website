import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// TODO - ProductDetails Interface
export interface ProductDetails {
  brandName: string;
  color: string;
  discountPrice: number;
  id: string;
  imageUrl: string;
  originalPrice: number;
  productName: string;
  quantity: number;
  size: string;
  starRating: number;
  subheader: string;
  totalReviews: number;
}

//TODO - interface for initialState
export interface CartSlice {
  cartItems: ProductDetails[];
  cartCount: number;
  cartTotal: number;
  taxTotal: number;
}

// This is the CURRENT STATE OF THE REDUX SLICE
const initialState: CartSlice = {
  // TODO - cart variables here
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  taxTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // TODO - all of our context functions here
    addItemToCart: (state: CartSlice, action: PayloadAction<ProductDetails>) => {
      console.log("DISPATCH - addItemToCart: ", action);
      // your addToCart function code here
      // Passing in an item with all ProductDetails Information
      const itemToAdd = action.payload;
      const alreadyInCart = state.cartItems.find(
        (cartItem: ProductDetails) =>
          cartItem.id === itemToAdd.id && cartItem.color === itemToAdd.color && cartItem.size === itemToAdd.size
      );

      //if in cart then increase its quanity
      if (alreadyInCart) {
        // If it exists, update quantity by adding the quantity from itemToAdd to our existing quantity, else return cartItem unchanged
        state.cartItems.map((cartItem) =>
          cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + itemToAdd.quantity } : cartItem
        );
      }

      // Return a new array containing our current cartItems and Add the new item object to the end
      state.cartItems = [...state.cartItems, { ...itemToAdd }];
    },
    removeItemFromCart: (state: CartSlice, action: PayloadAction<ProductDetails>) => {
      // your removeFromCart function code here
      // Passing in itemToRemove - filter and create new list WITHOUT this one item
    },
    updateCartCount: (state: CartSlice, action: PayloadAction<number>) => {
      console.log("DISPATCH - updateCartCount: ", action);
      // your updateCartCount function code here
      state.cartCount += action.payload;
    },
    updateCartItem: (state: CartSlice, action: PayloadAction<{ cartItemToUpdate: ProductDetails; newQuantity: number }>) => {
      // your updateCartItem function code here
    },
    clearCart: (state: CartSlice) => {
      // your clearCart function code here
    },
  },
});

//TODO - add our reducer function in here, we will call these using useSelector()
// Action creators are generated for each case reducer function
export const { addItemToCart, updateCartCount } = cartSlice.actions;

export default cartSlice.reducer;
