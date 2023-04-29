import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

export interface CartSlice {
  cartItems: ProductDetails[];
  cartCount: number;
  cartTotal: number;
  taxTotal: number;
}

const initialState: CartSlice = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  taxTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state: CartSlice, action: PayloadAction<ProductDetails>) => {
      console.log("DISPATCHING - addItemToCart");
      const itemToAdd: ProductDetails = action.payload;

      // CHECKING IF ITEM ALREADY EXISTS IN OUR CART
      const alreadyInCart: ProductDetails | undefined = state.cartItems.find(
        (cartItem: ProductDetails) =>
          cartItem.id === itemToAdd.id && cartItem.color === itemToAdd.color && cartItem.size === itemToAdd.size
      );

      // ITEM EXISTS, UPDATE THE QUANTITY OF THE ITEM IN "CARTITEMS[]"
      if (alreadyInCart) {
        const updatedList: ProductDetails[] = state.cartItems.map((cartItem) =>
          cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + itemToAdd.quantity } : cartItem
        );

        state.cartItems = updatedList;
      } else {
        // ITEM DOES NOT EXIST IN CART, ADD IT TO THE END OF THE "CARTITEMS[]"
        state.cartItems = [...state.cartItems, { ...itemToAdd }];
      }
    },
    removeItemFromCart: (state: CartSlice, action: PayloadAction<ProductDetails>) => {
      console.log("DISPATCHING - removeItemFromCart");
      const itemToRemove: ProductDetails = action.payload;

      // CREATING NEW CARTITEMS[] WITHOUT THE MATCHED ITEM
      const updatedCartItems: ProductDetails[] = state.cartItems.filter((item) => item.id !== itemToRemove.id);

      state.cartItems = updatedCartItems;

      // UPDATING CART COUNT
      const updatedCartCount: number = state.cartItems.reduce((totalItems, currentItem) => totalItems + currentItem.quantity, 0);

      state.cartCount = updatedCartCount;
    },
    updateCartCount: (state: CartSlice, action: PayloadAction<number>) => {
      console.log("DISPATCHING - updateCartCount");
      // INCREASE CART COUNT BY 1 WHEN USER CLICKS "ADD TO CART" BUTTON
      state.cartCount += action.payload;
    },
    updateCartItem: (state: CartSlice, action: PayloadAction<{ cartItemToUpdate: ProductDetails; newQuantity: number }>) => {
      console.log("DISPATCHING - updateCartItem");
      //INCREASE/DECREASE OUR CART COUNT BY 1
      const { cartItemToUpdate, newQuantity } = action.payload;

      //MAP THROUGH cartItems[] AND UPDATE FOUND ITEM QUANTITY BY -1 | 1
      const updatedCartItems: ProductDetails[] = state.cartItems.map((cartItem: ProductDetails) =>
        cartItem.id === cartItemToUpdate.id ? { ...cartItem, quantity: newQuantity } : cartItem
      );

      state.cartItems = updatedCartItems;

      const newCartCount: number = state.cartItems.reduce((totalItems, currentItem) => totalItems + currentItem.quantity, 0);

      state.cartCount = newCartCount;
    },
    clearCart: (state: CartSlice) => {
      // SET CART TO EMPTY UPON SUCCESSFUL PAYMENT
      console.log("DISPATCHING - clearCart");
      state.cartItems = [];
    },
  },
});

// EXPORTING ALL REDUCERS WE CAN USE VIA "DISPATCH" IN OUR APP
export const { addItemToCart, updateCartCount, clearCart, updateCartItem, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
