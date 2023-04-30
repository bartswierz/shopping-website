import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/routes/navigation/navigation.component";
import Homepage from "./components/routes/homepage/homepage.component";
import Checkout from "./components/routes/checkout/checkout.component";
import Cart from "./components/routes/cart/cart.component";
import Authentication from "./components/routes/authentication/authentication.component";
import ProductCardDesktop from "./components/product-card-desktop/product-card-desktop.component";
import ProductCardMobile from "./components/product-card-mobile/product-card-mobile.component";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store/store";
import { fetchCategories, CategoriesMap } from "./store/slices/categoriesSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { AsyncThunkAction, Dispatch, AnyAction } from "@reduxjs/toolkit";

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

  const categoriesMap = useSelector((state: RootState) => state.categories.categoriesMap);
  const isLoading = useSelector((state: RootState) => state.categories.isLoading);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCategories());
  }, []);

  // CATEGORIESMAP CONTAINS ALL SHOE DATA FROM FIREBASE DB
  // const { categoriesMap } = useContext(CategoriesContext);
  // console.log("categoriesMap: ", categoriesMap);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // CHANGE TO MOBILE COMPONENT IF WIDTH LESS THAN 768 px
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // While our async thunk function is fetching our data from Firebase, we will render a loading icon on screen
  if (isLoading) {
    return <CircularProgress style={{ position: "fixed", top: "50%", left: "50%" }} />;
  }

  return (
    <Routes>
      {/* At the default path, display The navigation, inside our navigation we will use Outlet to display Home Page and/or any of the other paths we use */}
      {/* <Route path="/" element={<Navigation />}> */}
      <Route path="/" element={<Navigation />}>
        {/* using index: if you are at the '/' path then render this Homepage Component */}
        <Route index element={<Homepage />} />
        <Route path="Authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
        {/* Paths will be taken from  CategoryItem component using category.title - using conditional so that we will render component when our async function completes fetching our categoriesMap from firebase DB */}
        <Route
          path="casual"
          element={
            isMobile ? <ProductCardMobile products={categoriesMap.casual} /> : <ProductCardDesktop products={categoriesMap.casual} />
          }
        />
        <Route
          path="work"
          element={
            isMobile && isLoading ? (
              <ProductCardMobile products={categoriesMap.work} />
            ) : (
              <ProductCardDesktop products={categoriesMap.work} />
            )
          }
        />
        <Route
          path="outdoor"
          element={
            isMobile ? <ProductCardMobile products={categoriesMap.outdoor} /> : <ProductCardDesktop products={categoriesMap.outdoor} />
          }
        />
        <Route
          path="basketball"
          element={
            isMobile ? (
              <ProductCardMobile products={categoriesMap.basketball} />
            ) : (
              <ProductCardDesktop products={categoriesMap.basketball} />
            )
          }
        />
        <Route
          path="soccer"
          element={
            isMobile ? <ProductCardMobile products={categoriesMap.soccer} /> : <ProductCardDesktop products={categoriesMap.soccer} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
function dispatch(
  arg0: AsyncThunkAction<
    CategoriesMap,
    void,
    {
      state?: unknown;
      dispatch?: Dispatch<AnyAction> | undefined;
      extra?: unknown;
      rejectValue?: unknown;
      serializedErrorType?: unknown;
      pendingMeta?: unknown;
      fulfilledMeta?: unknown;
      rejectedMeta?: unknown;
    }
  >
) {
  throw new Error("Function not implemented.");
}
