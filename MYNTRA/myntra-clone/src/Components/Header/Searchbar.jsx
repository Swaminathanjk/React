import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div className="search_bar">
      <CiSearch />
      <input
        className="search_input"
        placeholder="Search for products, brands and more"
      />
    </div>
  );
};

export default Searchbar;
