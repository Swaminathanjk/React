import React from "react";
import Controls from "./Controls";
import Privacy_toggle from "./Privacy_toggle";

const Display = () => {
  
  return (
    <div>
      <div className="px-4 py-5 text-center"></div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <div className="lead mb-4">
              <Privacy_toggle/>
            </div>
          </h5>
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default Display;
