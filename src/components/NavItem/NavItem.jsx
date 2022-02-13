import React, { useState } from "react";
import "./NavItem.scss";
import arrow from "../../assets/images/arrow.svg";

const NavItem = ({ nav, getModal }) => {

  const [transform, setTransform] = useState(0);
  const trans = {
    transform: `translateX(${transform}px)`
  }

  const transformUp = () => {
    setTransform(transform - 130);
    if (transform < -670) {
      setTransform(0);
    }
  }
  const transformDown = () => {
    setTransform(transform + 130);
  }

  return (
    <div>
      <div className="arrows">
        <button disabled={transform === 0 ? true : false} onClick={transformDown} className="arrow1">
          <img src={arrow} alt="arrow" />
        </button>
        <button onClick={transformUp} className="arrow2">
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="home__nav">
        <ul className="row between nav" style={trans}>
          {nav.map((item) => (
            <li onClick={getModal} className="nav__item">
              <img className="img" src={item.img} alt="img" />
              <span className="txt">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavItem;
