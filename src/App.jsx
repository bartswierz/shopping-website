import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navigation from "./components/routes/navigation/navigation.component";
import Homepage from "./components/routes/homepage/homepage.component";
import Checkout from "./components/routes/checkout/checkout.component";
import Cart from "./components/routes/cart/cart.component";
import Authentication from "./components/routes/authentication/authentication.component";
import { CategoriesContext } from "./contexts/categories.context";
import ProductList from "./components/product-list/product-list.component";
import ProductCard from "./components/product-card/product-card.component";
// import Shirts from "./components/routes/shirts/shirts.component";
// import Pants from "./components/routes/pants/pants.component";
// import Jackets from "./components/routes/jackets/jackets.component";
// import Hats from "./components/routes/hats/hats.component";
// import Shoes from "./components/routes/shoes/shoes.component";

const App = () => {
  /* categoriesMap holds ALL of our PRODUCTS in our firebase DB. 
  collection: categories -> Documents: hats, jackets, pants, shirts, shoes */
  const { categoriesMap } = useContext(CategoriesContext);
  // console.log("shirts - CategoriesMap: ", categoriesMap.shirts);
  // console.log("categoriesMap in App.js: ", categoriesMap);
  // console.log("categoriesMap.basketball in App.js: ", categoriesMap.basketball);
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
        <Route path="casual" element={categoriesMap.basketball ? <ProductCard products={categoriesMap.basketball} /> : null} />
        <Route path="work" element={categoriesMap.basketball ? <ProductCard products={categoriesMap.basketball} /> : null} />
        <Route path="outdoor" element={categoriesMap.basketball ? <ProductCard products={categoriesMap.basketball} /> : null} />
        <Route path="basketball" element={categoriesMap.basketball ? <ProductCard products={categoriesMap.basketball} /> : null} />
        {/* <Route path="basketball" element={<ProductCard products={categoriesMap.basketball} />} /> */}
        {/* <Route path="shoes" element={<ProductCard products={categoriesMap.shoes} />} /> */}
        <Route path="soccer" element={categoriesMap.basketball ? <ProductCard products={categoriesMap.basketball} /> : null} />
        {/* <Route path="shoes" element={<ProductCard products={categoriesMap.basketball} />} /> */}
        {/* PREVIOUS PRODUCT LAYOUT TODO - Replace Product List with one ProductCard that will switch between shoes */}
        {/* <Route path="shoes" element={<ProductList products={categoriesMap.shoes} />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
