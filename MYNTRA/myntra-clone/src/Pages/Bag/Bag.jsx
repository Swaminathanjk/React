import React from "react";
import "./Bag.css";
import Bagsummary from "../../Components/Bag/Bagsummary.jsx";
import Bagdisplay from "../../Components/Bag/Bagdisplay.jsx";

const Bag = () => {
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <Bagdisplay />
        </div>
        <div className="bag-summary">
          <Bagsummary />
        </div>
      </div>
    </main>
  );
};

export default Bag;
