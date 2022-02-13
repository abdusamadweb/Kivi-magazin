import React from "react";

const Select = ({category, defaultt}) => {

  return (
    <select className="form__select">
      <option value="1">{defaultt}</option>
      {
        category.isFetched ? (
          category.data.map(option => (
            <option value={option}>{option}</option>
          ))
        ) : ('No data')
        
      }
    </select>
  );
};

export default Select;
