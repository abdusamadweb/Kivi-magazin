import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../components/Login/Login.scss";
import loginImg from "../assets/images/login-img.png";
import aside from "../assets/images/aside.svg";
import fill from "../assets/images/fill-left.svg";

const Login = ({ login, getLogin }) => {

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner row between">
          <div className="login__wrapper">
            <h2 className="login__title">Бесплатная регистрация</h2>
            <form className="login__form form">
              <label>
                Введите ваш email
                <input
                  className="form__inp login-inp"
                  type="email"
                  placeholder="example@kivi.uz"
                />
              </label>
              <div className="row between">
                <input
                  className="form__inp-region login-inp"
                  disabled
                  type="number"
                  placeholder="998"
                />
                <label className="form__label">
                  <input
                    className="form__inp-num login-inp"
                    type="number"
                    placeholder="97 772 13 44"
                  />
                </label>
              </div>
            </form>
            <p className="login__desc">
              Нажимая на кнопку «Получить доступ», я даю согласие на обработку
              персональных данных и соглашаюсь c условиями{" "}
              <span>договора и политикой конфиденциальности</span>
            </p>
            <div className="login__btns row between">
              <Link className="login__back" to="/">
                <img src={fill} alt="fill" />
              </Link>
              <Link onClick={getLogin}                       className="login__success" to='/'>
                Получить доступ
              </Link>
            </div>
            <div className="login__and">или</div>
            <p className="login__txt">
              Войдите в систему, если у вас уже есть аккаунт kivi.uz
            </p>
          </div>
          <div className="login__aside aside">
            <img src={loginImg} alt="img" height={800} />
            <img className="aside__img center-absolute" src={aside} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
