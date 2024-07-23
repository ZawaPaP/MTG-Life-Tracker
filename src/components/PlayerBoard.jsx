import React, { useState } from "react";
import ControlButton from "./ControlButton";
import LifePoints from "./LifePoints";
import "./PlayerBoard.css";
import PlayerName from "./PlayerName";

const PlayerBoard = ({ onLifePointsChange, player, playerId, lifePoints }) => {
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

  return (
    <div
      className={`${effect}`}
      onAnimationEnd={onAnimationEnd}
      style={{ maxHeight: "100%" }}
    >
      <PlayerName playerId={playerId} />

      <div className="d-flex justify-content-center align-items-start">
        <div className="d-flex justify-content-between align-items-center w-90">
          {/* マイナスボタン */}
          <ControlButton
            variant="secondary"
            value="-"
            handleClick={handleDecrementClick}
          />

          <LifePoints lifePoints={lifePoints} />
          {/* プラスボタン */}
          <ControlButton
            variant="primary"
            value="+"
            handleClick={handleIncrementClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerBoard;
