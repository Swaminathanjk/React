import { createStore } from "redux";

// Define the initial state
const INITIAL_VALUE = { counter: 0 };

// Reducer function with initial state handling
const counterReducer = (store = INITIAL_VALUE, action) => {
  let newstore = store;
  switch (action.type) {
    case "INCREMENT":
      newstore = { counter: store.counter + 1 };
      break;
    case "DECREMENT":
      newstore = { counter: store.counter - 1 };
      break;
    case "ADDITION":
      newstore = { counter: store.counter + action.payload.number };
      break;
    case "SUBTRACTION":
      newstore = { counter: store.counter - action.payload.number };
      break;
    default:
      newstore = store;
  }

  return newstore;
};

// Create the store with the reducer
const counterstore = createStore(counterReducer);
export default counterstore;
