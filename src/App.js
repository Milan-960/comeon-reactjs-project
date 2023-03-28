import React from "react";
import { BrowserRouter } from "react-router-dom";

import BaseRoutes from "./Router/Router";

import "./stylesheets/semantic.css";
import "./stylesheets/styles.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <BaseRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
