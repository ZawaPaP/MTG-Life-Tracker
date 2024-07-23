import React, { useState } from "react";
import PlayerName from "../PlayerName";
import CommanderCost from "./CommanderCost";
import CommanderDamageBoard from "./CommanderDamageBoard";
import "./CommanderPlayerBoard.css";
import MainLifeBoard from "./MainLifeBoard";

const CommanderPlayerBoard = ({
  player,
  onLifePointsChange,
  onCommanderCostClick,
  onCommanderDamageChange,
}) => {
  const [effect, setEffect] = useState("");

  const handleDecrementClick = () => {
    onLifePointsChange(-1);
    setEffect("damage");
  };
  const handleIncrementClick = () => {
    onLifePointsChange(1);
    setEffect("heal");
  };

  const onAnimationEnd = () => {
    setEffect("");
  };

  const handleCommanderCostClick = () => {
    onCommanderCostClick(+2);
  };

  return (
    <div
      className={`${effect}`}
      style={{ height: "100%" }}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="d-flex align-items-center justify-content-between mb-1">
        <div className="col-3">
          <PlayerName playerId={player.id} />
        </div>
        <div className="col">
          <CommanderCost
            commanderCost={player.commanderCost}
            onCommanderCostClick={handleCommanderCostClick}
          />
        </div>
        <div className="col-5">
          <p
            className="my-1 text-center"
            style={{
              fontSize: "0.8rem",
            }}
          >
            Commander Damage
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-between">
        <div className="main-life-board col-6">
          <MainLifeBoard
            lifePoints={player.lifePoints}
            handleDecrementClick={handleDecrementClick}
            handleIncrementClick={handleIncrementClick}
          />
        </div>
        <CommanderDamageBoard
          className="justify-content-between align-items-between"
          player={player}
          onCommanderDamageChange={onCommanderDamageChange}
        />
      </div>
    </div>
  );
};

export default CommanderPlayerBoard;
