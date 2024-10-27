import { createSlice } from "@reduxjs/toolkit";
import { default_items } from "../../data/items";

const itemSlice = createSlice({
  name: "item",
  initialState: default_items,
  reducers: {
    addInitialItem: (state, action) => {
      return store;
    },
  },
});

const itemActions = itemSlice.actions;

export default itemSlice;
