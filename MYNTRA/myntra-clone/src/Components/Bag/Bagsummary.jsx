import React from "react";
import "./Bagsummary.css";
import { useSelector } from "react-redux";

const Bagsummary = ({ items }) => {
  const bag = useSelector((store) => store.bag); // Assuming bag contains item IDs
  
  let itemQuantities = {};
  bag.forEach(itemId => {
    itemQuantities[itemId] = (itemQuantities[itemId] || 0) + 1;
  });
  console.log(itemQuantities);
  

  let totalItem = Object.keys(itemQuantities).length;
  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVENIENCE_FEES = 99;
  let finalPayment = 0;

  items.forEach(item => {
    const quantity = itemQuantities[item.id] || 0;
    if (quantity > 0) {
      // totalItem += quantity;
      totalMRP += item.original_price * quantity;
      totalDiscount += (item.original_price - item.current_price) * quantity;
      finalPayment += item.current_price * quantity;
    }
  });

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment + CONVENIENCE_FEES}</span>
        </div>
      </div>
      <button
        className="btn-place-order"
        onClick={() => {
          console.log("Order Placed");
        }}
      >
        <h3>Place Order</h3>
      </button>
    </div>
  );
};

export default Bagsummary;
