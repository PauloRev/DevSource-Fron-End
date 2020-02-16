import React from "react";
import { Router } from "react-router-dom";
import GlobalStyles from "./styles/global";

import Routes from "./routes";
import history from "./services/history";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <Footer />
        <ToastContainer optionsToast autoClose={3000} />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
