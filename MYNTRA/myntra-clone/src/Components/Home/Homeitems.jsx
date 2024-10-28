import React from "react";
import "./Homeitems.css";
import { useSelector, useDispatch } from "react-redux";
import { bagActions } from "../../Store/bagSlice";
import { FaTrash } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

const Homeitems = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  // console.log(bag);
  const itemisPresent = bag.find((bagItem) => bagItem === item.id);
  const dispatch = useDispatch();

  const itemcount = bag.filter((i) => i === item.id).length;
  const handleAddtoBag = () => {
    dispatch(bagActions.addtoBag(item.id));
  };
  const handleRemovefromBag = () => {
    // console.log("remove from bag");

    dispatch(bagActions.removefromBag(item.id));
  };
  return (
    <div className="home-item-container">
      <main>
        <div className="items-container">
          <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="item-details">
              <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
              </div>
              <div className="company-name">{item.company}</div>
              <div className="item-name">{item.item_name}</div>
              <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">
                  ({item.discount_percentage}% OFF)
                </span>
              </div>
            </div>
            {itemcount > 0 ? (
              <div>
                <button
                  className="btn-add-bag"
                  onClick={() => {
                    handleAddtoBag();
                  }}
                >
                  <IoMdAddCircleOutline className="add" />
                  Add to Bag {itemcount}
                </button>
                {itemisPresent ? (
                  <button
                    className="btn-remove-bag"
                    onClick={() => {
                      handleRemovefromBag();
                    }}
                  >
                    <FaTrash className="trash" />
                    Remove from Bag
                  </button>
                ) : null}
              </div>
            ) : (
              <button
                className="btn-add-bag"
                onClick={() => {
                  handleAddtoBag();
                }}
              >
                Add to Bag
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

// export const itemcount = { itemcount };
export default Homeitems;
