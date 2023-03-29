import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../Components/Login";
import GamesList from "../Components/Games-list";

import { SessionProvider } from "../Hooks/SessionProvider";

// setting up the path
export const routes = {
  LOGIN: "/",
  GAMELIST: "/games-list/",
};

function BaseRoutes() {
  return (
    <>
      <SessionProvider>
        <Routes>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.GAMELIST} element={<GamesList />} />
        </Routes>
      </SessionProvider>
    </>
  );
}

export default BaseRoutes;
