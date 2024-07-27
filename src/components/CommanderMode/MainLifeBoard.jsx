import React from "react";
import ControlButton from "../ControlButton";
import LifePoints from "../LifePoints";
import PoisonCounter from "./PoisonCounter";

const MainLifeBoard = ({
  lifePoints,
  handleDecrementClick,
  handleIncrementClick,
}) => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
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
      <PoisonCounter />
    </div>
  );
};

export default MainLifeBoard;
