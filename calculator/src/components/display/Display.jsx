import React, { useState } from "react";
import "./Display.css";
import Button from "../buttons/Button";

const Display = () => {
  const buttons = [
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "=",
    "C",
    "0",
    ".",
  ];

  const [caldis, setcaldis] = useState("");

  const addtodisplay = (buttons) => {
    console.log(buttons);

    if (buttons === "C") {
      setcaldis("");
    } else if (buttons === "=") {
      const result = eval(caldis);
      setcaldis(result);
    } else {
      let newdis = caldis + buttons;
      setcaldis(newdis);
    }
  };

  return (
    <div classNameName="display">
      <center>
        <input
          type="text"
          placeholder="Cleared"
          classNameName="display_text"
          value={caldis}
          readOnly
        />
      </center>

      <Button buttons={buttons} addtodisplay={addtodisplay} />
    </div>
  );
};

export default Display;
