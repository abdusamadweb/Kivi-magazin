import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import HeaderBottom from "./HeaderBottom";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.png";

const Header = ({ login, lang, changeLangUz, changeLangRu }) => {
  
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner row between align-center">
          <Link className="row align-center" to="/">
            <img className="header__logo" src={logo} alt="logo" />
            <span className="header__logo-txt">{lang.logo}</span>
          </Link>
          <HeaderNav lang={lang} />
          <div className="header__lang lang">
            <span onClick={changeLangRu} className="lang__txt">
              Рус
            </span>
            <span className="drop">|</span>
            <span onClick={changeLangUz} className="lang__txt">
              O’z
            </span>
          </div>
          <div className="header__log log">
            {login ? (
              <div className="row align-centerl77777tfftt   yn ">
                <span className="user-txt">Темиров</span>
                <img className="user-img" src={user} alt="" />
              </div>
            ) : (
              <div>
                <Link className="log__txt" to="/log-in">
                  {lang.logIn}
                </Link>
                <span className="drop">|</span>
                <span className="log__txt">{lang.logOut}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <HeaderBottom lang={lang} />
    </div>
  );
};

export default Header;
