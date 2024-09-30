import React from "react";
import "./Button.css";

const Button = ({ buttons, addtodisplay }) => {
  return (
    <div classNameName="keys">
      {buttons.map((buttons, index) => (
        <button
          key={index}
          classNameName="each_key"
          onClick={() => addtodisplay(buttons)}
        >
          {buttons}
        </button>
      ))}
    </div>
  );
};

export default Button;
