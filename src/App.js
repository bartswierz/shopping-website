import "./App.scss";
import Navigation from "./components/routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/routes/homepage/homepage.component";
import Checkout from "./components/routes/checkout/checkout.component";
import Cart from "./components/routes/cart/cart.component";
import Shirts from "./components/routes/shirts/shirts.component";
import Pants from "./components/routes/pants/pants.component";
import Jackets from "./components/routes/jackets/jackets.component";
import Hats from "./components/routes/hats/hats.component";
import Shoes from "./components/routes/shoes/shoes.component";
import Authentication from "./components/routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      {/* At the default path, display The navigation, inside our navigation we will use Outlet to display Home Page and/or any of the other paths we use */}
      <Route path="/" element={<Navigation />}>
        {/* using index: if you are at the '/' path then render this Homepage Component */}
        <Route index element={<Homepage />} />
        <Route path="Authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />

        {/* Paths will be taken from  CategoryItem component using category.title */}
        <Route path="shirts" element={<Shirts />} />
        <Route path="pants" element={<Pants />} />
        <Route path="jackets" element={<Jackets />} />
        <Route path="hats" element={<Hats />} />
        <Route path="shoes" element={<Shoes />} />
      </Route>
    </Routes>
  );
};

export default App;
