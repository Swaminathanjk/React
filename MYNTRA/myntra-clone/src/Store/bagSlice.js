import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addtoBag: (state, action) => {
      state.push(action.payload);
    },
    removefromBag: (state, action) => {
      const index = state.findIndex((item) => item === action.payload);
      // Create a copy of the state
      const newState = [...state];
      // Remove the item at the found index
      newState.splice(index, 1);
      return newState; // Return the new state
    },
    removeAll: (state, action) => {
      const newState = state.filter((item) => item !== action.payload);
      return newState;
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
