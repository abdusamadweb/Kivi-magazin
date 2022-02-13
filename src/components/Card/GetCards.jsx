import React from "react";
import fill from "../../assets/images/fill-down.svg";
import Card from "./Card";
import './Card.scss';

const GetCards = ({ isActive, active, data, limit, getCards }) => {
  return (
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
        className={`row between cards__list ${active === 2 ? "reverse" : ""}`}
      >
        {data.isFetched
          ? data.data.slice(0, limit).map((item, index) => (
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
  );
};

export default GetCards;
