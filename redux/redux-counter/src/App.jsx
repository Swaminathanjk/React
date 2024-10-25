import React from "react";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <div className="card">
          <div className="card-header">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
