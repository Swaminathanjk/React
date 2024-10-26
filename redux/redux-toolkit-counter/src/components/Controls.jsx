import React, { useState } from "react";
import "./Controls.css";
import { counterActions } from "../Store/counterstore";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(""); // State for input value

  const handleIncrement = () => {
    
    dispatch(counterActions.INCREMENT());
  };

  const handleDecrement = () => {
    dispatch(counterActions.DECREMENT());
  };

  const handleAddition = () => {
    dispatch(counterActions.ADDITION({ number: Number(inputValue) }));
  };

  const handleSubtraction = () => {
    dispatch(counterActions.SUBTRACTION({ number: Number(inputValue) }));
  };

  const handlePrivacyToggle = () => {

    dispatch(counterActions.PRIVACY_TOGGLE());
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
      <button
        onClick={handlePrivacyToggle}
        type="button"
        className="btn btn-warning btn-lg px-4 gap-3"
      >
        Privacy Toggle
      </button>
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
