import react from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import "./styles/index.css";
// import "./styles/variables.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./features/store";

createRoot(document.getElementById("root")).render(
  <react.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </react.StrictMode>
);
