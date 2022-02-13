import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home, Login, SearchPage, SingleCard } from "./pages";
import Footer from "./components/Footer/Footer";
import {language} from './assets/js/NavItem/index.js';

// css
import "./assets/styles/flex-box.css";
import "./assets/styles/global.css";
import "./assets/styles/main.css";

function App() {
  const [active, setActive] = useState(1);
  const [limit, setLimit] = useState(12);
  const [limitDown, setLimitDown] = useState(4);
  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(false);
  const [lang, setLang] = useState(language.ru);

  console.log(lang);

  const [data, setData] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${limit}`)
      .then(function (response) {
        setData({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setData({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [limit]);

  const isActive = (index) => {
    setActive(index);
  };

  const getCards = () => {
    setLimit(limit + 4);
  };

  const getCardsDown = () => {
    setLimitDown(limitDown + 4);
  };

  const getLogin = () => {
    setLogin(true);
  };

  const getModal = () => {
    setModal(true);
  }
  const breakModal = () => {
    setModal(false);
  }

  const changeLangUz = () => {
    setLang(language.uz);
  }

  const changeLangRu = () => {
    setLang(language.ru);
  }

  return (
    <div className="App">
      <Header login={login} lang={lang} changeLangUz={changeLangUz} changeLangRu={changeLangRu} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              active={active}
              limit={limit}
              limitDown={limitDown}
              data={data}
              isActive={isActive}
              getCards={getCards}
              getCardsDown={getCardsDown}
              modal={modal}
              getModal={getModal}
              breakModal={breakModal}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <SingleCard
              active={active}
              limitDown={limitDown}
              data={data}
              isActive={isActive}
              getCardsDown={getCardsDown}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              active={active}
              limit={limit}
              limitDown={limitDown}
              data={data}
              isActive={isActive}
              getCards={getCards}
              getCardsDown={getCardsDown}
            />
          }
        />
        <Route
          path="/log-in"
          element={<Login login={login} getLogin={getLogin} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
