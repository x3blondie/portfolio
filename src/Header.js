import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// home
//

//about
// https://img.icons8.com/nolan/2x/user-female.png

function Header({ active }) {
  return (
    <div className="header">
      {active === "home" && (
        <img
          className="header__image"
          src="https://img.icons8.com/nolan/344/home-page.png"
          alt=""
        />
      )}

      {active === "portfolio" && (
        <img className="header__image" src="./Icon.png" alt="" />
      )}
      {active === "about" && (
        <img
          className="header__image"
          src="https://img.icons8.com/nolan/2x/user-female.png"
          alt=""
        />
      )}

      <ul>
        <Link to="/">
          <li className={active === "home" && "header__home--active"}>Home</li>
        </Link>
        <Link to="/portfolio">
          <li className={active === "portfolio" && "header__portfolio--active"}>
            Portfolio
          </li>
        </Link>
        <Link to="/about">
          <li className={active === "about" && "header__about--active"}>
            About
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
