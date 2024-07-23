import React from "react";
import { useGame } from "../GameContext";
import { handleLifePointsChange } from "../utils";
import PlayerBoard from "./PlayerBoard";
import "./StandardGame.css";

const StandardGame = () => {
  const { players, setPlayers } = useGame();

  const onLifePointsChange = (playerId, value) => {
    handleLifePointsChange(playerId, value, players, setPlayers);
  };

  return (
    <>
      <div
        className="d-flex calculator-board"
        style={{
          height: "95vh",
        }}
      >
        <div className="container-fluid text-center">
          <div className="row">
            {players.map((player) => (
              <div key={player.id} className={"col-6"}>
                <PlayerBoard
                  playerId={player.id}
                  player={`Player ${player.id}`}
                  lifePoints={player.lifePoints}
                  onLifePointsChange={(value) =>
                    onLifePointsChange(player.id, value)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StandardGame;
