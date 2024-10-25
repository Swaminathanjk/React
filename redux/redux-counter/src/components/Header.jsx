import React from "react";
import Display from "./Display";

const Header = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Redux Counter</h1>
        <Display />
      </div>
    </div>
  );
};

export default Header;
