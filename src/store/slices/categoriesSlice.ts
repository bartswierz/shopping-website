import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// STRUCTURE OF THE FIVE SHOE TYPES
export interface CategoryData {
  featuresList: string[];
  shoesList: {
    id: string;
    brandName: string;
    productName: string;
    subheader: string;
    discountPrice: number;
    originalPrice: number;
    imageUrl: string;
    color: string;
    starRating: number;
    totalReviews: number;
  }[];
}

// STRUCTURE OF THE CATEGORIESMAP COMING FROM FIREBASE DB
export interface CategoriesMap {
  basketball: CategoryData[];
  casual: CategoryData[];
  outdoor: CategoryData[];
  soccer: CategoryData[];
  work: CategoryData[];
}

export interface CategoriesSlice {
  categoriesMap: CategoriesMap;
  isLoading: boolean;
  error: string | null;
}

const initialState: CategoriesSlice = {
  categoriesMap: {
    basketball: [],
    casual: [],
    outdoor: [],
    soccer: [],
    work: [],
  },
  isLoading: true,
  error: null,
};

// ASYNC FUNCTION THAT FETCHES OUR CATEGORIESMAP DATA FROM FIREBASE DB
export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  // @ts-ignore
  const categoriesMap: CategoriesMap = await getCategoriesAndDocuments();
  console.log("Fetched categories: ", categoriesMap);
  return categoriesMap;
});

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        // WILL DISPLAY LOADING ICON WHILE APP IS BUSY FETCHING DATA FROM FIREBASE DB
        console.log("Fetching data from Firebase DB...");
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        // COMPLETED FETCHING DATA FROM FIREBASE
        state.categoriesMap = action.payload;
        console.log("Finished fetching data: ", state.categoriesMap);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        // FETCHING FAILED
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch categories";
      });
  },
});

// EXPORTING ALL REDUCERS WE CAN USE VIA "DISPATCH" IN OUR APP
export const {} = categoriesSlice.actions;

// export const categoriesReducer = categoriesSlice.reducer;
export default categoriesSlice.reducer;
