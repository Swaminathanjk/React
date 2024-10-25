import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Controls.css";

const Controls = () => {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddition = () => {
    dispatch({ type: "ADDITION", payload: { number: Number(inputValue) } });
  };

  const handleSubtraction = () => {
    dispatch({ type: "SUBTRACTION", payload: { number: Number(inputValue) } });
  };

  return (
    <div>
      <input
        type="text"
        className="form"
        placeholder="Enter a number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value
      />
      <p className="card-text fw-bold">PERFORM FOLLOWING ACTIONS</p>

      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            onClick={handleIncrement}
            type="button"
            className="btn btn-success btn-lg px-4 gap-3"
          >
            Increment
          </button>
          <button
            onClick={handleAddition}
            type="button"
            className="btn btn-success btn-lg px-4"
          >
            Add {inputValue}
          </button>
          <button
            onClick={handleDecrement}
            type="button"
            className="btn btn-danger btn-lg px-4"
          >
            Decrement
          </button>
          <button
            onClick={handleSubtraction}
            type="button"
            className="btn btn-danger btn-lg px-4"
          >
            Subtract {inputValue}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
