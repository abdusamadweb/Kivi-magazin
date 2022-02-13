import NavItem from "../components/NavItem/NavItem";
import { nav } from "../assets/js/NavItem/index.js";
import { items } from "../assets/js/NavItem/index.js";
import { itemsSc } from "../assets/js/NavItem/index.js";
import Recommend from "../components/Recommend/Recommend";
import GetСards from "../components/Card/GetCards";
import { useState } from "react";
import arrow from "../assets/images/arrow-left.svg";

const Home = ({
  active,
  limit,
  limitDown,
  data,
  getCards,
  getCardsDown,
  isActive,
  modal,
  getModal,
  breakModal,
}) => {
  const [scList, setScList] = useState(false);

  const hideList =() => {
    setScList(true);
  }

  const hideListSc = () => {
    setScList(false);
  }

  return (
    <div className="home">
      <span
        onClick={breakModal}
        className={`modal-bg ${modal ? "" : "d-none"}`}
      ></span>
      <div className={`modal center-absolute ${modal ? "" : "d-none"}`}>
        <ul className={`modal__list row ${scList ? 'd-none' : ''}`}>
          {items.map((item) => (
            <li onClick={hideList} className="modal__item">{item}</li>
          ))}
        </ul>
        <div className={`modal__list-sc ${scList ? '' : 'd-none'}`}>
          <div onClick={hideListSc} className="modal__title-sc">
            <img src={arrow} alt="arrow" />
            Компьютеры
          </div>
          <ul className="row">
            {itemsSc.map((item) => (
              <li className="modal__item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="home__inner">
          <NavItem nav={nav} getModal={getModal} />
          <GetСards
            isActive={isActive}
            active={active}
            limit={limit}
            data={data}
            getCards={getCards}
          />
        </div>
      </div>
      <Recommend />
      <div className="container">
        <GetСards
          isActive={isActive}
          active={active}
          limit={limitDown}
          data={data}
          getCards={getCardsDown}
        />
      </div>
    </div>
  );
};

export default Home;
