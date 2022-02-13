import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import plus from "../../assets/images/plus.svg";
import Select from "../Select/Select";

const HeaderBottom = ({lang}) => {
  const inputRef = useRef(null)

  const [search, setSearch] = useState("");

  const [hb, setHb] = useState(false);
  const getHbNone = () => {
    setHb(true);
  }

  const searchCards = (e) => {
    e.preventDefault();
    setSearch(inputRef.current.value);
    console.log(search);
  };

  const [category, setCategory] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then(function (response) {
        setCategory({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setCategory({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, []);

  return (
    <div className={`header__hb hb ${hb ? 'd-none' : ''}`}>
      <div className="container">
        <div className="hb__inner row between align-center">
          <form
            onSubmit={searchCards}
            className="hb__form form row between align-ceneter"
          >
            <Select
              key={category}
              category={category}
              defaultt={lang.selectDef[0]}
            />
            <label>
              <input
                ref={inputRef}
                className="form__inp"
                type="search"
                placeholder="Что будем искать ?"
              />
            </label>
            <Select category={category} defaultt={lang.selectDef[1]} />
            <button className="form__btn">
              <Link onClick={getHbNone} to='/search'>{lang.searchBtn}</Link>
            </button>
          </form>
          <button className="hb__btn">
            <img src={plus} />
            {lang.addObj}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
