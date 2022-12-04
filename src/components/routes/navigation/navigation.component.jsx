import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import Checkout from "../checkout/checkout.component";
import Cart from "../cart/cart.component";
import { ReactComponent as HomeLogo } from "../../../assets/home-outline.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link to="/" className="home-logo-container">
          <HomeLogo className="home-logo" />
        </Link>

        <div className="nav-items">
          <Link to="/checkout" element={<Checkout />}>
            Checkout
          </Link>
          <Link to="/cart" element={<Cart />}>
            Cart
          </Link>
        </div>
      </div>
      {/* Renders the nested components inside navigation */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
