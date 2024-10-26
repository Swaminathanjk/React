import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    INCREMENT(state) {
      state.count = state.count + 1;
    },
    DECREMENT(state) {
      state.count = state.count - 1;
    },
    ADDITION(state, action) {
      state.count = state.count + action.payload.number;
    },
    SUBTRACTION(state, action) {
      state.count = state.count - action.payload.number;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
