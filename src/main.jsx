import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { ThemeArea } from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeArea>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeArea>
);
