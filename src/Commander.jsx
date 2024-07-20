import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import PlayerBoard from "./components/PlayerBoard";
import Reset from "./components/Reset";

export default function Game() {
  const [player1LifePoints, setPlayer1LifePoints] = useState(20);
  const [player2LifePoints, setPlayer2LifePoints] = useState(20);

  const player1HandleLifePointsChange = (value) => {
    setPlayer1LifePoints(player1LifePoints + value);
  };
  const player2HandleLifePointsChange = (value) => {
    setPlayer2LifePoints(player2LifePoints + value);
  };

  const handleReset = () => {
    setPlayer1LifePoints(20);
    setPlayer2LifePoints(20);
  };

  return (
    <>
      <div className="header-background d-flex justify-content-end align-items-start">
        <Menu />
      </div>
      <div className="d-flex calculator-board">
        <div class="container-fluid text-center">
          <div className="row">
            <div className="col player-left">
              <PlayerBoard
                player="Player 1"
                lifePoints={player1LifePoints}
                onLifePointsChange={player1HandleLifePointsChange}
              />
            </div>
            <div className="col player-right">
              <PlayerBoard
                player="Player 2"
                lifePoints={player2LifePoints}
                onLifePointsChange={player2HandleLifePointsChange}
              />
            </div>
          </div>
        </div>
        <div className="reset-button justify-content-end align-item-end">
          <Reset onClickReset={handleReset} />
        </div>
      </div>
    </>
  );
}
