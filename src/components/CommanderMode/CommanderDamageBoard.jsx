import React from "react";
import CommanderDamageCounter from "./CommanderDamageCounter";

const CommanderDamageBoard = ({ player, onCommanderDamageChange }) => {
  const otherPlayerIds = [1, 2, 3, 4].filter((id) => id !== player.id);

  const handleCommanderLifeChange = ({ opponentId, value }) => {
    onCommanderDamageChange(opponentId, value);
  };

  if (!player.commanderLife) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-5 justify-content-between align-item-between">
      {otherPlayerIds.map((opponentId) => {
        return (
          <CommanderDamageCounter
            key={`${player.id}-${opponentId}`}
            opponentId={opponentId}
            player={player}
            onCommanderLifeChange={(value) => {
              handleCommanderLifeChange({ opponentId, value });
            }}
            commanderDamagePoints={
              player.commanderLife.find(
                (commander) => commander.player === opponentId
              ).damage
            }
          />
        );
      })}
    </div>
  );
};

export default CommanderDamageBoard;
