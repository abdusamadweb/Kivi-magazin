import React, { useState } from "react";
import "../components/SearchPage/Search.scss";
import searchIcon from "../assets/images/search.svg";
import x from "../assets/images/x.svg";
import fill from "../assets/images/fill-down.svg";
import Card from "../components/Card/Card";

const SearchPage = ({ active, limit, data, getCards, isActive }) => {
  const [search, setSearch] = useState("");

  const searchCard = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <div className="container">
        <div className="search__inner">
          <form className="search__form form">
            <img src={searchIcon} alt="icon" />
            <label className="form__label">
              <input
                onChange={searchCard}
                className="form__inp"
                type="search"
                placeholder="Введите название обявления"
              />
            </label>
          </form>
          <div className="search__tags">
            <span className="tag tag1">Интерсное</span>
            <span className="tag tag2">Топ</span>
            <span className="tag tag3">Отличные предложение</span>
            <span className="tag tag4">Супер цена</span>
          </div>
          <div className="search__rubric rubric">
            <div className="rubric__inner">
              <div className="rubric__wrapper row align-center">
                <span className="rubric__title">Вы сейчас в рубрике</span>
                <ul className="rubric__list row">
                  <li className="rubric__item">
                    Электроника
                    <img src={x} alt="x" />
                  </li>
                  <li className="rubric__item">
                    Мониторы
                    <img src={x} alt="x" />
                  </li>
                </ul>
              </div>
              <form className="rubric__form">
                <div className="rubric__sort between align-center">
                  <span className="rubric__title">Выберите цену от и до</span>
                  <input className="rubric__range" type="range" />
                </div>
                <button className="rubric__btn">Применить</button>
              </form>
            </div>
          </div>
          <div className="home__cards cards">
            <ul className="row cards__nav nav">
              <li
                onClick={() => isActive(1)}
                className={`nav__item ${active === 1 ? "active" : ""}`}
              >
                Новые объявления
              </li>
              <li
                onClick={() => isActive(2)}
                className={`nav__item ${active === 2 ? "active" : ""}`}
              >
                Лучщие предложение
              </li>
            </ul>
            <ul
              className={`row between cards__list ${
                active === 2 ? "reverse" : ""
              }`}
            >
              {data.isFetched
                ? data.data
                    .slice(0, limit)
                    .filter((item) => item.title.toLowerCase().includes(search))
                    .map((item, index) => (
                      <Card
                        key={index}
                        id={item.id}
                        img={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                      />
                    ))
                : "Loading ..."}
            </ul>
            <div className={`cards__show ${limit === 20 ? "d-none" : ""}`}>
              <button onClick={getCards}>Покозать еще</button>
              <img src={fill} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
