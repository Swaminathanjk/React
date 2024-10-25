import React from "react";

const Loading = () => {
  return (
    <center>
      <div className="spinner-grow text-danger mb-3" role="status"></div>
      <h4>Fetching data from API</h4>
    </center>
  );
};

export default Loading;
