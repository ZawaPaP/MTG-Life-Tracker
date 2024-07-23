import React from "react";
import { useGame } from "../../GameContext";
import {
  handleCommanderCostChange,
  handleCommanderDamageChange,
  handleLifePointsChange,
} from "../../utils";
import CommanderPlayerBoard from "./CommanderPlayerBoard";

const CommanderGame = ({ players }) => {
  const { setPlayers } = useGame();

  const onLifePointsChange = (playerId, value) => {
    handleLifePointsChange(playerId, value, players, setPlayers);
  };
  const onCommanderCostClick = (playerId, value) => {
    handleCommanderCostChange(playerId, value, players, setPlayers);
  };

  const onCommanderDamageChange = (playerId, opponentId, value) => {
    handleCommanderDamageChange(
      playerId,
      opponentId,
      value,
      players,
      setPlayers
    );
  };

  return (
    <>
      {/* height of button + footer ≒ 18vh */}
      <div className="d-flex container-fluid" style={{ height: "82vh" }}>
        <div className="row align-item-center" style={{ height: "100%" }}>
          {players.map((player) => (
            <div key={player.id} className={"col-6"}>
              <CommanderPlayerBoard
                player={player}
                onLifePointsChange={(value) =>
                  onLifePointsChange(player.id, value)
                }
                onCommanderCostClick={(value) =>
                  onCommanderCostClick(player.id, value)
                }
                onCommanderDamageChange={(opponentId, value) =>
                  onCommanderDamageChange(player.id, opponentId, value)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommanderGame;
