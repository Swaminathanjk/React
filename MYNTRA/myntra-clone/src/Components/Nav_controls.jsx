import React from "react";

const Nav_controls = () => {
  return (
    <div>
      <div className="action_bar">
        <div className="action_container">
          <span className="material-symbols-outlined action_icon">person</span>
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <span className="material-symbols-outlined action_icon">
            favorite
          </span>
          <span className="action_name">Wishlist</span>
        </div>

        <div className="action_container">
          <span className="material-symbols-outlined action_icon">
            shopping_bag
          </span>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">0</span>
        </div>
      </div>
    </div>
  );
};

export default Nav_controls;
