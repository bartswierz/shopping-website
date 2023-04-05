import { Outlet, Link, NavLink } from "react-router-dom";
import { Fragment, useContext, useState, useEffect, useRef } from "react";
import { ReactComponent as HomeLogo } from "../../../assets/home-outline.svg";
import { ReactComponent as CartIcon } from "../../../assets/cart-outline.svg";
import Checkout from "../checkout/checkout.component";
import Cart from "../cart/cart.component";
import Authentication from "../authentication/authentication.component";
import { CartContext } from "../../../contexts/cart.context";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Icon, useColorScheme } from "@mui/material";
import { IconContext } from "react-icons/lib";

const Navigation = () => {
  const { cartCount } = useContext(CartContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // console.log("cartCount: ", cartCount);
  // const [value, setValue] = useState(0);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobile(window.innerWidth < 768);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const signoutHandler = async () => {
    const response = await signOutUser();
    // console.log("signOutHandler - response: ", response);

    //setting currentUser to null upon successful returned promise, this effectively resets the User Context
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <IconContext.Provider value={{ color: "#000" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            {/* <nav className={`navbar ${isMobile ? "mobile" : "desktop"}`}> */}
            <Link to="/" className="home-logo-container" onClick={closeMobileMenu}>
              <HomeLogo className="home-logo" />
              {/* <HomeLogo className="navbar-icon home-logo" onClick={closeMobileMenu} /> */}
            </Link>
            {/* TODO - Turn these into hamburger once screen is 600px */}
            {/* <div className="nav-links"> */}
            {/* If currentUser EXISTS(user input email and password inside our Sign In Form, then display 'Sign Out' to indicate user is logged in, else display Sign In */}
            {/* {currentUser ? (
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
          // <Link to="/cart" element={<Cart />}>
            
          //   <div className="cart-icon-container">
          //     <CartIcon className="cart-icon" />
          //     <div className="cart-item-count">{cartCount}</div>
          //   </div>
          // </Link> */}

            {/* className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} ADDS 'activated' class to the DOM upon user clicking one of the Nav Links*/}

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <GiHamburgerMenu />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {/* <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  to="/authentication"
                  className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                  onClick={closeMobileMenu}
                >
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/checkout"
                  className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                  onClick={closeMobileMenu}
                >
                  checkout
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                  onClick={closeMobileMenu}
                >
                  <div className="cart-icon-container">
                    <CartIcon className="cart-icon" />
                    <div className="cart-item-count">{cartCount}</div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* DISPLAYS CONTEXT FROM ALL OF OUR OTHER PAGES UNDER OUR NAVIGATION */}
        <Outlet />
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navigation;
