import React, { useContext } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Game from "../Pages/Game";
import { SessionContext } from "../Hooks/SessionProvider";

//* To restrict access to the GAME route allow only for authenticated users

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(SessionContext);

  function GameWrapper() {
    const { gameId } = useParams();
    return <Game gameCode={gameId} />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<GameWrapper />} />
      </Routes>
    </>
  );
};

export default PrivateRoute;
