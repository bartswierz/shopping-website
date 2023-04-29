import { Outlet, Link, NavLink } from "react-router-dom";
import { Fragment, useContext, useState, useEffect } from "react";
import HomeLogo from "../../../assets/home-outline.svg";
import CartIcon from "../../../assets/cart-outline.svg";
import CartIconMenu from "../../../assets/cart-outline-menu.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

// Testing logo Icon
import BrandLogo from "../../../assets/brand-logo.png";
import NavLogo from "../../../assets/nav-logo.png";

const Navigation = () => {
  const cartCount = useSelector((state: RootState) => state.cart.cartCount);

  // Will be used for authentication/authorizing user using firebase
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // console.log("CURRENT USER: ", currentUser);

  const [isMobile, setIsMobile] = useState(false);

  // Check screen width to set navigation items for (mobile < 768px < desktop)
  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth <= 768); // CHANGE TO MOBILE COMPONENT IF WIDTH LESS THAN 768 px
      setIsMobile(window.innerWidth <= 767.98); // CHANGE TO MOBILE COMPONENT IF WIDTH LESS THAN 768 px
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log("isMobile: ", isMobile);

  const [click, setClick] = useState(false);

  // document.body.classlist.add("menu-open");
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

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
            <Link to="/" className="brand-logo-container" onClick={closeMobileMenu}>
              {/* <HomeLogo className="home-logo" /> */}
              <div className="filter">
                <img src={BrandLogo} className="brand-logo" />
              </div>
              {/* <HomeLogo className="navbar-icon home-logo" onClick={closeMobileMenu} /> */}
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <GiHamburgerMenu />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {/* BRAND LOGO & NAV HEADER TEXT */}
              {isMobile ? (
                <li>
                  <div className="nav-menu-header-container">
                    <div className="nav-brand-container filter">
                      <img src={NavLogo} className="brand-logo" />
                    </div>
                    <p className="nav-menu-header">Alpha Footwear</p>
                    {/* <p>Iconic Shoes For Less</p> */}
                  </div>
                </li>
              ) : (
                ""
              )}
              {/* NAV LINKS */}
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  {isMobile ? (
                    <div style={{ width: "22px", height: "22px" }}>
                      {/* <HomeLogo className="home-logo" /> */}
                      <img src={HomeLogo} className="home-logo" />
                    </div>
                  ) : (
                    ""
                  )}
                  <p className="nav-link-text">Home</p>
                </NavLink>
              </li>
              <li className="nav-item">
                {currentUser ? (
                  <NavLink
                    to="/authentication"
                    className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                    // element={<Authentication />}
                    // element={Authentication}
                    onClick={() => {
                      signoutHandler(), closeMobileMenu;
                    }}
                  >
                    {isMobile ? <LogoutRoundedIcon fontSize={"large"} /> : ""}
                    <span className="nav-link-text">Sign Out</span>
                  </NavLink>
                ) : (
                  <NavLink
                    to="/authentication"
                    className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}
                  >
                    {isMobile ? <LoginRoundedIcon fontSize={"large"} /> : ""}
                    <span className="nav-link-text">Sign In</span>
                  </NavLink>
                )}
              </li>

              {/* TODO - Add Sign/Sign Out */}
              {/* {currentUser ? (
                <Link to="/authentication" element={<Authentication />} onClick={signoutHandler}>
                  Sign Out
                </Link>
              ) : (
                <Link to="/authentication" element={<Authentication />}>
                  Sign In
                </Link>
              )} */}

              <li className="nav-item">
                <NavLink
                  to="/checkout"
                  className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                  // className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                  onClick={closeMobileMenu}
                >
                  {isMobile ? <CreditCardRoundedIcon fontSize={"large"} /> : ""}
                  <span className="nav-link-text">checkout</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                  onClick={closeMobileMenu}
                >
                  <div className="cart-icon-container">
                    {/* <CartIcon className="cart-icon" /> */}
                    {/* <img src={CartIcon} className="cart-icon" /> */}
                    <img src={isMobile ? CartIconMenu : CartIcon} className="cart-icon" />
                    <div className="cart-item-count">{cartCount}</div>
                  </div>
                  {isMobile ? <span className="menu-link-text nav-link-text">Cart</span> : ""}
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
