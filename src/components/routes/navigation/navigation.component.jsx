import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import Checkout from "../checkout/checkout.component";
import Cart from "../cart/cart.component";
import { ReactComponent as HomeLogo } from "../../../assets/home-outline.svg";
import { ReactComponent as CartIcon } from "../../../assets/cart-outline.svg";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import Authentication from "../authentication/authentication.component";

const Navigation = () => {
  const { cartCount } = useContext(CartContext);

  // console.log("cartCount: ", cartCount);

  return (
    <Fragment>
      <div className="navbar">
        <Link to="/" className="home-logo-container">
          <HomeLogo className="home-logo" />
        </Link>

        <div></div>
        <div className="nav-items">
          <Link to="/authentication" element={<Authentication />}>
            Sign In
          </Link>
          <Link to="/checkout" element={<Checkout />}>
            Checkout
          </Link>
          <Link to="/cart" element={<Cart />}>
            {/* Cart */}
            <div className="cart-icon-container">
              <CartIcon className="cart-icon" />
              <div className="cart-item-count">{cartCount}</div>
            </div>
          </Link>
        </div>
      </div>
      {/* Renders the nested components inside navigation */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
