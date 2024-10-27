import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo_container">
      <Link to="/">
        <img
          className="myntra_home"
          src="./images/myntra_logo.webp"
          alt="Myntra Home"
        />
      </Link>
    </div>
  );
};

export default Logo;
