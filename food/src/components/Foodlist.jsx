import React, { useState } from "react";
import "./Foodlist.css";

const Foodlist = ({ item, onClickadd, handleInputChange, buying }) => {
  let [addeditem, setaddeditem] = useState([]);
  const onClickbuy = (foodItem) => {
    if (addeditem.includes(foodItem)) {
      setaddeditem(addeditem.filter((current) => current !== foodItem));
    } else {
      setaddeditem((prev) => [...prev, foodItem]);
    }
  };

  return (
    <div classNameName="foodlist">
      <p classNameName="title">FOOD LIST</p>

      <ul classNameName="list list-group">
        <div classNameName="add_section">
          <input
            onChange={handleInputChange}
            placeholder="Enter food"
            type="text"
            classNameName="add"
          />
          <button
            onClick={onClickadd}
            classNameName="add_button btn btn-primary"
          >
            Add
          </button>
        </div>

        {item.map((foodItem, index) => (
          <p
            classNameName={`items list-group-item ${
              addeditem.includes(foodItem) ? "active" : ""
            }`}
            key={index}
          >
            {foodItem}
            <button
              onClick={(event) => onClickbuy(foodItem, event)}
              classNameName="buy_button btn btn-success"
            >
              {addeditem.includes(foodItem) ? "Remove" : "Buy"}
            </button>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Foodlist;
