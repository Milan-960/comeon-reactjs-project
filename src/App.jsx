import React from "react";
import { BrowserRouter } from "react-router-dom";
import Logo from "./Assets/images/logo.svg";

import BaseRoutes from "./Router/Router";

import "./stylesheets/semantic.css";
import "./stylesheets/styles.css";
import "./stylesheets/Game.css";
import "./stylesheets/404.css";

const App = () => {
  return (
    <>
      <div class="ui one column center aligned page grid">
        <div class="column twelve wide">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      <BrowserRouter>
        <BaseRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
