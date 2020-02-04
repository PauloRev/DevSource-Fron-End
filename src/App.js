import React from "react";
import { Router } from "react-router-dom";
import GlobalStyles from "./styles/global";

import Routes from "./routes";
import history from "./services/history";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const token = localStorage.getItem("@DevSource/token");

  return (
    <>
      <Router history={history}>
        <Header isVisible={token ? true : false} />
        <Routes />
        <Footer />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
