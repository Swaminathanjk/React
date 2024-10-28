import React from "react";
import "./Bag.css";
import Bagsummary from "../../Components/Bag/Bagsummary.jsx";
import Bagdisplay from "../../Components/Bag/Bagdisplay.jsx";
import { useSelector } from "react-redux";

const Bag = () => {
  const bag = useSelector((store) => store.bag); // Assuming bag contains item IDs
  const items = useSelector((store) => store.items); // Assuming items are objects with an id property

  // console.log(items);

  const finalitems = items.filter((item) => {
    return bag.includes(item.id); // Use includes to check for presence of item.id in bag
  });
  // console.log(finalitems);
  

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalitems.length > 0 ? (
            finalitems.map((item) => (
              <Bagdisplay key={item.id} item={item} /> // Added key for list rendering
            ))
          ) : (
            <p>No items in the bag</p> // Show message if no items
          )}
        </div>

        <div className="bag-summary">
          {/* {finalitems.map((item) => (
            <Bagsummary key={item.id} item={item} />
          ))} */}
          <Bagsummary items={finalitems} />
        </div>
      </div>
    </main>
  );
};

export default Bag;
