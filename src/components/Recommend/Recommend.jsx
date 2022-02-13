import React from "react";
import RecItem from "./RecItem";

// imgs
import item1 from "../../assets/images/rec-item1.png";
import item2 from "../../assets/images/rec-item2.png";
import item3 from "../../assets/images/rec-item3.png";

const Recommend = () => {
  return (
    <div className="recommend">
      <div className="container">
        <ul className="row between recommend__list">
          <RecItem title={"Техника Apple по доступным ценам"} img={item1} />
          <RecItem title={"Брендовые товары за копейки"} img={item2} />
          <RecItem title={"Все товары для офиса в одном месте"} img={item3} />
        </ul>
      </div>
    </div>
  );
};

export default Recommend;
