import React from "react";
import "./Bagsummary.css";

const Bagsummary = () => {
  const totalItem = 0;
  const totalMRP = 0;
  const totalDiscount = 0;
  const CONVENIENCE_FEES = 99;
  const finalPayment = 0;
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
          <span className="price-item-value">₹{finalPayment}</span>
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
