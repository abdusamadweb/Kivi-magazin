import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title, category, price, id }) => {
  return (
    <li>
      <Link to={`/products/${id}`} className='card'>
        <img className="card__img" src={img} alt="img" />
        <div className="card__titles">
          <h3 className="card__title">{title}</h3>
          <span className="card__category">{category}</span>
          <span className="card__price">$ {price}</span>
        </div>
      </Link>
    </li>
  );
};

export default Card;
