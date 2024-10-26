import { createStore } from "redux";

// Define the initial state
const INITIAL_VALUE = { counter: 0, privacy: false };

// Reducer function with initial state handling
const counterReducer = (store = INITIAL_VALUE, action) => {
  let newstore = store;
  switch (action.type) {
    case "INCREMENT":
      newstore = { ...store, counter: store.counter + 1 };
      break;
    case "DECREMENT":
      newstore = { ...store, counter: store.counter - 1 };
      break;
    case "ADDITION":
      newstore = { ...store, counter: store.counter + action.payload.number };
      break;
    case "SUBTRACTION":
      newstore = { ...store, counter: store.counter - action.payload.number };
      break;
    case "PRIVACY_TOGGLE":
      newstore = { ...store, privacy: !store.privacy };
      break;
    default:
      newstore = store;
  }

  return newstore;
};

// Create the store with the reducer
const counterstore = createStore(counterReducer);
export default counterstore;
