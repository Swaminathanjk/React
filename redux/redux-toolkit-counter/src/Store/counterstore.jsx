import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
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

const privacySlice = createSlice({
  name: "privacy",
  initialState: { privacy: false },
  reducers: {
    PRIVACY_TOGGLE(state) {
      state.privacy = !state.privacy;
    },
  },
});

// Create the store with the reducer
const counterstore = configureStore({
  reducer: {
    counter: counterslice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterActions = {
  ...counterslice.actions,
  ...privacySlice.actions,
};
export default counterstore;

// Define the initial state
// const INITIAL_VALUE = { counter: 0, privacy: false };

// Reducer function with initial state handling
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   let newstore = store;
//   switch (action.type) {
//     case "INCREMENT":
//       newstore = { ...store, counter: store.counter + 1 };
//       break;
//     case "DECREMENT":
//       newstore = { ...store, counter: store.counter - 1 };
//       break;
//     case "ADDITION":
//       newstore = { ...store, counter: store.counter + action.payload.number };
//       break;
//     case "SUBTRACTION":
//       newstore = { ...store, counter: store.counter - action.payload.number };
//       break;
//     case "PRIVACY_TOGGLE":
//       newstore = { ...store, privacy: !store.privacy };
//       break;
//     default:
//       newstore = store;
//   }

//   return newstore;
// };
