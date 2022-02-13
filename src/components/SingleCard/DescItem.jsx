import React from "react";

const Descitem = ({ txt }) => {
  return (
    <li className="desc__item">
      <div className="desc__titles">
        <span className="desc__title">Количество комнат:</span>
        <span className="desc__txt">{txt}</span>
      </div>
    </li>
  );
};

export default Descitem;
