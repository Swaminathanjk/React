import React from "react";
import Homeitems from "../Components/Home/Homeitems";
import { useSelector } from "react-redux";
import "./App.css";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items.length);
  console.log(items[0]);

  return (
    <div className="home-container">
      {items.map((item) => (
        <Homeitems key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;

// const items = [
//   {
//     id: "001",
//     image: "/images/1.jpg",
//     company: "Carlton London",
//     item_name: "Rhodium-Plated CZ Floral Studs",
//     original_price: 1045,
//     current_price: 606,
//     discount_percentage: 42,
//     return_period: 14,
//     delivery_date: "10 Oct 2023",
//     rating: {
//       stars: 4.5,
//       count: 1400,
//     },
//   },
// ];
