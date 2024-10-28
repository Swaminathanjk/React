import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemActions } from "../Store/itemSlice";
import { fetchingActions } from "../Store/FetchSlice";
import Loading from "../Components/Loading";

const ItemFetch = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone === true) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchingActions.fetchingStart());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchingActions.markfetchDone());
        dispatch(fetchingActions.fetchingEnd());
        dispatch(itemActions.addInitialItem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus.fetchDone]);


  return <></>;
};

export default ItemFetch;
