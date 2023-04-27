//TODO - initial State
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//TODO - interface for initialState

const initialState = {
  // TODO - cart variables here
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // TODO - all of our context functions here
  },
});

//TODO - add our reducer function in here, we will call these using useSelector()
// Action creators are generated for each case reducer function
export const {} = cartSlice.actions;

export default cartSlice.reducer;
