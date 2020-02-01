import React from "react";
import { Router } from "react-router-dom";
import GlobalStyles from "./styles/global";

import Routes from "./routes";
import history from "./services/history";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <Routes />
        <Footer />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
