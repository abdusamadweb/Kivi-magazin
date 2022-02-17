import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetCards from "../components/Card/GetCards";
import Descitem from "../components/SingleCard/DescItem";
import "../components/SingleCard/SingleCard.scss";

const SingleCard = ({ active, limitDown, data, isActive, getCardsDown }) => {
  const { id } = useParams();

  const [card, setCard] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(function (response) {
        setCard({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setCard({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [id]);

  console.log(card);

  return (
    <div className="single">
      <div className="container">
        <div className="single__inner">
          <h2 className="single__title">{card.data.title}</h2>
          <div className="single__body row between">
            <img className="single__img" src={card.data.image} alt="img" />
            <div className="single__wrapper">
              <div className="single__articles row between">
                <span className="single__article">Артикул: 4418970</span>
                <span className="single__article">
                  обновлено: 28.04.17 добавлено: 28.04.17
                </span>
              </div>
              <span className="single__price">{card.data.price} у.е.</span>
              <span className="single__city">
                Ташкент, Ташкентская область, Юнусабадский район{" "}
              </span>
              <div className="single__numbers">
                +99891 166 ****
                <span className="single__numbers-hide">Покозать польностю</span>
              </div>
              <div className="single__numbers">
                +99891 166 ****
                <span className="single__numbers-hide">Покозать польностю</span>
              </div>
              <span className="single__author">
                Автор обьявлении:
                <span className="single__author-name">Зухриддин Темиров</span>
              </span>
              <div className="single__btns btns">
                <button className="btns__send btn">Написать автору</button>
                <button className="btns__suggest btn">
                  Предложить свою цену
                </button>
              </div>
              <div className="single__desc desc">
                <ul className="desc__list row between">
                  <Descitem txt={"6"} />
                  <Descitem txt={"40 м2"} />
                  <Descitem txt={"32"} />
                  <Descitem txt={"6"} />
                  <Descitem txt={"Первая сдача "} />
                  <Descitem txt={"32"} />
                  <Descitem txt={"Раздельная"} />
                  <Descitem txt={"Сдача в 2017"} />
                  <Descitem txt={"Авторский проект"} />
                  <Descitem txt={"2 санузла и более"} />
                  <Descitem txt={"Да"} />
                  <Descitem txt={"32"} />
                  <li>
                    <div className="desc__titles">
                      <span className="desc__title">Количество комнат:</span>
                      <span className="desc__txt">
                        Больница, поликлиника, Детская, площадка, Детский сад,
                        Остановки, Парк, зелёная зона, Развлекательные
                        заведения, Рестораны, кафе{" "}
                      </span>
                    </div>
                  </li>
                </ul>
                <p className="desc__lorem">{card.data.description}</p>
                <div className="row between desc__aside">
                  <span className="desc__views">Просмотры: 10958</span>
                  <button className="desc__report">Пожаловатся</button>
                </div>
              </div>
            </div>
          </div>
          <GetCards
            active={active}
            limit={limitDown}
            data={data}
            isActive={isActive}
            getCards={getCardsDown}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
