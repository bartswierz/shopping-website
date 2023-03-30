import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Navigation from "./components/routes/navigation/navigation.component";
import Homepage from "./components/routes/homepage/homepage.component";
import Checkout from "./components/routes/checkout/checkout.component";
import Cart from "./components/routes/cart/cart.component";
import Authentication from "./components/routes/authentication/authentication.component";
import { CategoriesContext } from "./contexts/categories.context";
import ProductList from "./components/product-list/product-list.component";
import ProductCardDesktop from "./components/product-card-desktop/product-card-desktop.component";
import ProductCardMobile from "./components/product-card-mobile/product-card-mobile.component";
import SHOP_DATA from "./shop-data";

//TO UPDATE OUR FIREBASE DB COLLECTION WITH NEW CHANGES INSIDE shop-data.js
import { addCollectionAndDocuments } from "./utils/firebase/firebase.utils";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  //DO NOT REMOVE, THIS WILL ALLOW US TO CREATE AND STORE OUR SHOP_DATA product information into our firebase DB. ("collectionName", DataFile)
  // useEffect(() => {
  //   console.log("BUILD/UPDATE COLLECTION WITH THIS DATA IN SHOP_DATA: ", SHOP_DATA);
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  /* categoriesMap holds ALL of our PRODUCTS in our firebase DB. 
  collection: categories -> Documents: hats, jackets, pants, shirts, shoes */
  const { categoriesMap, setCategoriesMap } = useContext(CategoriesContext);
  // console.log("App.js - categoriesMap: ", categoriesMap);

  return (
    <Routes>
      {/* At the default path, display The navigation, inside our navigation we will use Outlet to display Home Page and/or any of the other paths we use */}
      <Route path="/" element={<Navigation />}>
        {/* using index: if you are at the '/' path then render this Homepage Component */}
        <Route index element={<Homepage />} />
        <Route path="Authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
        {/* Paths will be taken from  CategoryItem component using category.title - using conditional so that we will render component when our async function completes fetching our categoriesMap from firebase DB */}

        {/* 2. isMobile -> If viewport width is less than 768px, render Mobile Component, ELSE render desktop component  */}
        <Route
          path="casual"
          element={
            isMobile ? <ProductCardMobile products={categoriesMap.casual} /> : <ProductCardDesktop products={categoriesMap.casual} />
          }
        />
        <Route
          path="work"
          element={
            isMobile ? <ProductCardMobile products={categoriesMap.work} /> : <ProductCardDesktop products={categoriesMap.work} />
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
