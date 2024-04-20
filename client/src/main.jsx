import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="964107877490-3cd13dlkv63qckqe0e5dea0sbeb30ijk.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </Router>
);
