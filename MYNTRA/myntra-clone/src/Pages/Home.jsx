import React from "react";
import Homeitems from "../Components/Home/Homeitems";
import { useSelector } from "react-redux";
import "./App.css";


const Home = () => {

  const items = useSelector((store) => store.items);

  return (
    <div className="home-container">
      
      {items.map((item) => (
        <Homeitems key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
