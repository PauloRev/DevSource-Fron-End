import { createGlobalStyle } from "styled-components";
import theme from "./theme";

import background from "../assets/images/background.svg";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  /* html, body, #root {
    height: 100%;
    overflow: hidden;
  } */

  body {
    -webkit-font-smoothing: antialiased;
    background: ${theme.colors.primary} url(${background}) no-repeat center top;
    background-position-y: -300px;
    color: #FFF;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
