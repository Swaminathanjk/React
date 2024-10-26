import React from "react";

const Searchbar = () => {
  return (
    <div className="search_bar">
      <span className="material-symbols-outlined search_icon">search</span>
      <input
        className="search_input"
        placeholder="Search for products, brands and more"
      />
    </div>
  );
};

export default Searchbar;
