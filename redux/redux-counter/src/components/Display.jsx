import React from "react";
import Controls from "./Controls";
import { useSelector } from "react-redux";
import counterstore from "../Store/counterstore";

const Display = () => {
  const counter = useSelector((store) => store.counter);
  
  return (
    <div>
      <div className="px-4 py-5 text-center"></div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <p className="lead mb-4">
              <strong>COUNTER VALUE : {counter} </strong>
            </p>
          </h5>
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default Display;
