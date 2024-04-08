import { store } from "./store";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
