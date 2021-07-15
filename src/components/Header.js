import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../style/header.css";
import useWindowSize from "../hooks/useWindowSize";
import { CSSTransition } from "react-transition-group";

const Header = () => {
  const [ showMobileMenu, setShowMobileMenu ] = useState(false);
  const { width } = useWindowSize();

  let menu;
  let hamburger;
  let mobileMenu;
  let mobileMenuMask;

  if (width >= 768) {
    menu = (
      <div className="nav-menu">
        <Link to="/login" className="item">
          Login
        </Link>
        <Link to="/register" className="item">
          Sign Up
        </Link>
      </div>
    );
  } else {
    hamburger = (
      <div className="toggle-button">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </div>
    );

    mobileMenu = (
      <div className="menu">
        <CSSTransition
          in={showMobileMenu}
          unmountOnExit
          timeout={500}
          classNames="mobile-menu"
        >
          <div className="nav-mobile-menu">
            <Link to="/login" className="item-mobile">
              Login
            </Link>
            <Link to="/register" className="item-mobile">
              Sign Up
            </Link>
          </div>
        </CSSTransition>
      </div>
    );

    if (showMobileMenu) {
      mobileMenuMask = (
        <div
          className="mobile-menu-mask"
          onClick={() => setShowMobileMenu(false)}
        />
      );
    }
  }

  return (
    <header className="navbar">
      <Link to="/" className="item">
        GymFit
      </Link>
      {mobileMenuMask}
      {mobileMenu}
      {hamburger}
      {menu}
    </header>
  );
};

export default Header;
