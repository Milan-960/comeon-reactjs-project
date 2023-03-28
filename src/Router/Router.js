import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../Components/Login";
import Logout from "../Components/Logout";
import Casino from "../Components/Casino";

export const routes = {
  HOME: "/",
  LOGOUT: "/logout",
  CASINO: "/casino/",
};

function BaseRoutes() {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Login />} />
        <Route path={routes.LOGOUT} element={<Logout />} />
        <Route path={routes.CASINO} element={<Casino />} />
      </Routes>
    </>
  );
}

export default BaseRoutes;
