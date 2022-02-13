import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const HeaderNav = ({ lang }) => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list row">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            {lang.hnav1}
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            {lang.hnav2}
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            {lang.hnav3}
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            {lang.hnav4}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
