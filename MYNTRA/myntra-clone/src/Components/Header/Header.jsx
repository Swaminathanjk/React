import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Nav_controls from "./Nav_controls";
import Logo from "./Logo";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <Logo />
        <Navbar />
        <Searchbar />
        <Nav_controls />
      </header>
    </div>
  );
};

export default Header;
