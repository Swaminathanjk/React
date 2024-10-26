import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

// Create the store with the reducer
const counterstore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterstore;
