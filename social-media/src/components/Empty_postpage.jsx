import React from "react";

const Empty_postpage = ({ add_api }) => {
  return (
    <div>
      <center>
        <h1>Profile Empty</h1>
        <button onClick={add_api} type="button" class="btn btn-success">
          Import API
        </button>
      </center>
    </div>
  );
};

export default Empty_postpage;
