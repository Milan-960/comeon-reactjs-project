import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { SessionContext } from "../Hooks/SessionProvider";
import CategoryFilter from "./CategoryFilter";

function GameLists() {
  const { userSession, handleLogout, checkAuth } = useContext(SessionContext);

  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  console.log("games", games);

  // Search for games
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  // Filter for category
  const filteredGames = games.filter((game) => {
    if (selectedCategory === 0) {
      return true;
    }
    return game.categoryIds.includes(selectedCategory);
  });

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  useEffect(() => {
    // added this line to check if the user is authenticated
    checkAuth();

    fetch("http://localhost:3001/games", { method: "get" })
      .then((response) => response.json())
      .then((resp) => {
        setGames(resp);
      });

    // For categories
    fetch("http://localhost:3001/categories", { method: "get" })
      .then((response) => response.json())
      .then((resp) => {
        setCategories(resp);
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
                  onChange={handleSearch}
                />
                <i className="search icon"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="twelve wide column">
              <h3 className="ui dividing header">Games</h3>

              <div className="ui relaxed divided game items links">
                {filteredGames
                  .filter((game) =>
                    game.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((game) => (
                    <div key={game.id} className="game item">
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
                        <Link
                          to={`/games-list/game/${game.code}`}
                          className="ui icon right floated button"
                        >
                          <div className="play-button-container">
                            Play <i className="right play icon"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="four wide column">
              <h3 className="ui dividing header">Categories</h3>
              <div className="ui selection animated list category items header">
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategorySelect={handleCategorySelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameLists;
