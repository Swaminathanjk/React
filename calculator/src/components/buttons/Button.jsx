import React from "react";
import "./Button.css";

const Button = ({ buttons, addtodisplay }) => {
  return (
    <div className="keys">
      {buttons.map((buttons, index) => (
        <button
          key={index}
          className="each_key"
          onClick={() => addtodisplay(buttons)}
        >
          {buttons}
        </button>
      ))}
    </div>
  );
};

export default Button;
