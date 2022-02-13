import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

// imgs
import logo from "../../assets/images/logo-dark.svg";
import store1 from '../../assets/images/store1.svg'
import store2 from '../../assets/images/store2.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row between align-center footer__inner">
          <Link className="footer__logo row align-center" to="/">
            <img src={logo} alt="logo" />
            <span className="footer__logo-txt">
              Продай, найди купи все что ты пожелаешь{" "}
            </span>
          </Link>
          <p className="footer__desc">
            Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
            обяления
          </p>
          <div className="footer__store row">
            <a href="#"><img src={store1} alt="store" /></a>
            <a href="#"><img src={store2} alt="store" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
