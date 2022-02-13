import React from "react";
import "./Recommend.scss";

export default function RecItem({ title, img }) {
  return (
    <li className="recommend__item">
      <h2 className="recommend__title">{title}</h2>
      <img className="recommend__img" src={img} alt="img" />
      <span className="recommend__txt">987 обьявлениий</span>
    </li>
  );
}
