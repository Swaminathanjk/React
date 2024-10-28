import React from "react";
import { CgProfile, CgHeart, CgShoppingBag } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav_controls = () => {
  const totalItem = useSelector((state) => state.bag);
  const Wishlist = useSelector((state) => state.bag);
  return (
    <div className="nav_controls">
      <div className="action_bar">
        <div className="action_container">
          <CgProfile />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <CgHeart />
          <span className="action_name">Wishlist</span>
          <span className="wishlist_active">.</span>
        </div>

        <div className="action_container">
          <CgShoppingBag />
          <Link to="/bag" className="action_name">
            Bag
          </Link>
          <span className="bag-item-count">{totalItem.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav_controls;
