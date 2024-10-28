import React from "react";
import "./App.css";

import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";

import { Outlet } from "react-router-dom";
import ItemFetch from "./ItemFetch";
import Loading from "../Components/Loading";
import { useSelector } from "react-redux";

const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <ItemFetch />
      {fetchStatus.CurrFetching ? <Loading /> : <Outlet />}

      <Footer />
    </>
  );
};

export default App;
