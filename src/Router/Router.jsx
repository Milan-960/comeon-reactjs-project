import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../Components/Login";
import { SessionProvider } from "../Hooks/SessionProvider";
import GamesList from "../Pages/Games-list";
import NotFound from "../Pages/404";

import PrivateRoute from "../Router/PrivateRoute";

// setting up the path
export const routes = {
  LOGIN: "/",
  GAMELIST: "/games-list/",
  GAME: "/games-list/game/:gameId",
};

function BaseRoutes() {
  return (
    <>
      <SessionProvider>
        <Routes>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.GAMELIST} element={<GamesList />} />
          <Route path={routes.GAME} element={<PrivateRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SessionProvider>
    </>
  );
}

export default BaseRoutes;
