import React from "react";
import { Route, Routes, useParams } from "react-router-dom";

import Login from "../Components/Login";
import GamesList from "../Components/Games-list";

import { SessionProvider } from "../Hooks/SessionProvider";
import Game from "../Components/Game";

// setting up the path
export const routes = {
  LOGIN: "/",
  GAMELIST: "/games-list/",
  GAME: "/games-list/game/:gameId",
};

// to load gameId
function GameWrapper() {
  const { gameId } = useParams();
  return <Game gameCode={gameId} />;
}

function BaseRoutes() {
  return (
    <>
      <SessionProvider>
        <Routes>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.GAMELIST} element={<GamesList />} />
          <Route path={routes.GAME} element={<GameWrapper />} />
        </Routes>
      </SessionProvider>
    </>
  );
}

export default BaseRoutes;
