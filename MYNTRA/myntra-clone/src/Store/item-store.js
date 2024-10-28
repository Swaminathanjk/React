import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchingSlice from "./FetchSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchingSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
