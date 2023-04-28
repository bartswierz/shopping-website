import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";

export const store = configureStore({
  // TODO - We will create cartSlice, userSlice, categoriesSlice
  reducer: {
    cart: cartSliceReducer,
  },
});

/* Infer the `RootState` and `AppDispatch` types from the store itself. in useSelector our passed state 
i.e. useSelector((state: RootState) => state.cart.___) */
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
