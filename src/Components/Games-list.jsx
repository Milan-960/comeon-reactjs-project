import React, { useState, useEffect, useContext } from "react";
import { SessionContext } from "../Hooks/SessionProvider";

function GameLists() {
  const { userSession, handleLogout, checkAuth } = useContext(SessionContext);
  const [games, setGames] = useState([]);

  console.log("games", games);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // added this line to check if the user is authenticated
    checkAuth();

    fetch("http://localhost:3001/games", { method: "get" })
      .then((response) => response.json())
      .then((resp) => {
        setGames(resp);
      });
  }, [checkAuth]);

  return (
    <div className="main container">
      <div className="games">
        <div className="ui stackable grid">
          <div className="row">
            <div className="twelve wide column">
              <div className="ui list">
                <div className="player item">
                  {userSession && userSession.avatar && (
                    <img
                      className="ui avatar image"
                      src={userSession.avatar}
                      alt="avatar"
                    />
                  )}
                  <div className="content">
                    <div className="header">
                      <b className="name">{userSession?.name}</b>
                    </div>
                    <div className="description event">
                      {userSession?.event}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="logout ui left floated secondary button inverted"
                onClick={handleLogout}
              >
                <i className="left chevron icon"></i> Log Out
              </div>
            </div>

            <div className="four wide column">
              <div className="search ui small icon input">
                <input
                  type="text"
                  placeholder="Search Game"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="search icon"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="twelve wide column">
              <h3 className="ui dividing header">Games</h3>

              <div className="ui relaxed divided game items links">
                {games
                  .filter((game) =>
                    game.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((game) => (
                    <div className="item" key={game.id}>
                      <div className="image game-image">
                        <img
                          src={game.icon}
                          alt={game.name}
                          className="game-image"
                        />
                      </div>
                      <div className="content">
                        <div className="header">{game.name}</div>
                        <div className="description">{game.description}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="four wide column">
              <h3 className="ui dividing header">Categories</h3>
              <div className="ui selection animated list category items header">
                CategoryFilter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameLists;
