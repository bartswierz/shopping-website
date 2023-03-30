import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as HomeLogo } from "../../../assets/home-outline.svg";
import { ReactComponent as CartIcon } from "../../../assets/cart-outline.svg";
import Checkout from "../checkout/checkout.component";
import Cart from "../cart/cart.component";
import Authentication from "../authentication/authentication.component";
import { CartContext } from "../../../contexts/cart.context";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { cartCount } = useContext(CartContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // console.log("cartCount: ", cartCount);

  const signoutHandler = async () => {
    const response = await signOutUser();
    // console.log("signOutHandler - response: ", response);

    //setting currentUser to null upon successful returned promise, this effectively resets the User Context
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navbar">
        <Link to="/" className="home-logo-container">
          <HomeLogo className="home-logo" />
        </Link>

        <div className="nav-items">
          {/* If currentUser EXISTS(user input email and password inside our Sign In Form, then display 'Sign Out' to indicate user is logged in, else display Sign In */}
          {currentUser ? (
            <Link to="/authentication" element={<Authentication />} onClick={signoutHandler}>
              Sign Out
            </Link>
          ) : (
            <Link to="/authentication" element={<Authentication />}>
              Sign In
            </Link>
          )}
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
