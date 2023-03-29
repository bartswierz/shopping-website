import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import Navigation from "./components/routes/navigation/navigation.component";
import Homepage from "./components/routes/homepage/homepage.component";
import Checkout from "./components/routes/checkout/checkout.component";
import Cart from "./components/routes/cart/cart.component";
import Authentication from "./components/routes/authentication/authentication.component";
import { CategoriesContext } from "./contexts/categories.context";
import ProductList from "./components/product-list/product-list.component";
import ProductCard from "./components/product-card/product-card.component";

//TO PUSH OUR DATA INTO FIREBASE DB
import { addCollectionAndDocuments } from "./utils/firebase/firebase.utils";
import SHOP_DATA from "./shop-data";
// import Shirts from "./components/routes/shirts/shirts.component";
// import Pants from "./components/routes/pants/pants.component";
// import Jackets from "./components/routes/jackets/jackets.component";
// import Hats from "./components/routes/hats/hats.component";
// import Shoes from "./components/routes/shoes/shoes.component";

const App = () => {
  //DO NOT REMOVE, THIS WILL ALLOW US TO CREATE AND STORE OUR SHOP_DATA product information into our firebase DB. ("collectionName", DataFile)
  // useEffect(() => {
  //   console.log("BUILD/UPDATE COLLECTION WITH THIS DATA IN SHOP_DATA: ", SHOP_DATA);
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  /* categoriesMap holds ALL of our PRODUCTS in our firebase DB. 
  collection: categories -> Documents: hats, jackets, pants, shirts, shoes */
  const { categoriesMap } = useContext(CategoriesContext);
  // console.log("shirts - CategoriesMap: ", categoriesMap.shirts);
  // console.log("categoriesMap in App.js: ", categoriesMap);
  console.log("categoriesMap.basketball in App.js: ", categoriesMap.basketball);
  console.log("categoriesMap.casual in App.js: ", categoriesMap.casual);
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
        <Route path="casual" element={categoriesMap.casual ? <ProductCard products={categoriesMap.casual} /> : null} />
        <Route path="work" element={categoriesMap.work ? <ProductCard products={categoriesMap.work} /> : null} />
        <Route path="outdoor" element={categoriesMap.outdoor ? <ProductCard products={categoriesMap.outdoor} /> : null} />
        <Route path="basketball" element={categoriesMap.basketball ? <ProductCard products={categoriesMap.basketball} /> : null} />
        {/* <Route path="basketball" element={<ProductCard products={categoriesMap.basketball} />} /> */}
        {/* <Route path="shoes" element={<ProductCard products={categoriesMap.shoes} />} /> */}
        <Route path="soccer" element={categoriesMap.soccer ? <ProductCard products={categoriesMap.soccer} /> : null} />
        {/* <Route path="shoes" element={<ProductCard products={categoriesMap.basketball} />} /> */}
        {/* PREVIOUS PRODUCT LAYOUT TODO - Replace Product List with one ProductCard that will switch between shoes */}
        {/* <Route path="shoes" element={<ProductList products={categoriesMap.shoes} />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
