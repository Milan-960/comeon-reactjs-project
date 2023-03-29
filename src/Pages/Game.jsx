import React from "react";

import { useNavigate } from "react-router-dom";

const gameURLs = {
  //* Games URLs from the provided data!

  starburst: {
    src: "https://comeon-static-test.casinomodule.com/games/starburst_mobile_html/game/starburst_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-41e133d5237c402-EUR&gameId=starburst_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
  },
  jackhammer: {
    src: "https://comeon-static-test.casinomodule.com/games/jackhammer_mobile_html/game/jackhammer_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-0b3a6e21685c42a-EUR&gameId=jackhammer_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
  },
  jackandbeanstalk: {
    src: "https://comeon-static-test.casinomodule.com/games/jackandbeanstalk_mobile_html/game/jackandbeanstalk_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game.casinomodule.com%2F&lang=en&sessId=DEMO-756f72b48bc2493-EUR&gameId=jackandbeanstalk_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
  },
  deadoralive: {
    src: "https://comeon-static-test.casinomodule.com/games/deadoralive_mobile_html/game/deadoralive_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-979bbc939ea9412-EUR&gameId=deadoralive_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
  },
  twinspin: {
    src: "https://comeon-static-test.casinomodule.com/games/twinspin_mobile_html/game/twinspin_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game.casinomodule.com%2F&lang=en&sessId=DEMO-c813546a446a412-EUR&gameId=twinspin_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent",
  },
};

function Game({ gameCode }) {
  //* Game URL
  const gameURL = gameURLs[gameCode]?.src;
  const navigate = useNavigate();

  //* Back button
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="game-container">
        <div className="game-back-button">
          <button onClick={handleBackButtonClick}>
            <i className="left chevron icon"></i> Back to Games-List
          </button>
        </div>
        <div id="game-launch" className="game-launch">
          {gameURL ? (
            <iframe
              id="game"
              title={gameCode}
              src={gameURL}
              frameBorder="0"
              className="game-iframe"
              scrolling="no"
            />
          ) : (
            <p>Invalid game code provided</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Game;
