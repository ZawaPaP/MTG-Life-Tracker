import React, { useState } from "react";
import ControlButton from "./ControlButton";
import LifePoints from "./LifePoints";
import "./PlayerBoard.css";

export default function PlayerBoard({
  onLifePointsChange,
  player,
  lifePoints,
}) {
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
    <div className={`${effect}`} onAnimationEnd={onAnimationEnd}>
      <div className="display-7 mt-2">{player}</div>

      <div className="d-flex justify-content-center align-items-start mt-2">
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
}
