import React from "react";
import "./Bagdisplay.css";
import { RxCross2 } from "react-icons/rx";
import { bagActions } from "../../Store/bagSlice";
import { useSelector, useDispatch } from "react-redux";
import { FiMinusCircle } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";

const Bagdisplay = ({ item }) => {
  const bag = useSelector((store) => store.bag); // Assuming bag contains item IDs
  
  const itemcount = bag.filter((i) => i === item.id).length;
  const dispatch = useDispatch();

  const removeitem = () => {
    dispatch(bagActions.removefromBag(item.id));
  };
  const removeall = () => {
    dispatch(bagActions.removeAll(item.id));
  };
  const handleAddtoBag = () => {
    dispatch(bagActions.addtoBag(item.id));
  };

  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="bag-item-container">
            <div className="item-left-part">
              <img className="bag-item-img" src={item.image} />
            </div>
            <div className="item-right-part">
              <div className="company">{item.company}</div>
              <div className="item-name">{item.item_name}</div>
              <div className="price-container">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount-percentage">
                  ({item.discount_percentage}% OFF)
                </span>
              </div>
              <div className="return-period">
                <span className="return-period-days">
                  {item.return_period} days
                </span>{" "}
                return available
              </div>
              <div className="delivery-details">
                Delivery by
                <span className="delivery-details-days">
                  {item.delivery_date}
                </span>
              </div>
              <div className="qty">
                Qty: {itemcount}{" "}
                <IoMdAddCircleOutline
                  onClick={() => handleAddtoBag()}
                  className="add"
                />
                <FiMinusCircle onClick={() => removeitem()} className="minus" />
              </div>
            </div>
            <div className="remove-from-cart" onClick={() => removeall()}>
              <RxCross2 />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bagdisplay;
