import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import counterstore from "./Store/counterstore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={counterstore}>
      <App />
    </Provider>
  </StrictMode>
);