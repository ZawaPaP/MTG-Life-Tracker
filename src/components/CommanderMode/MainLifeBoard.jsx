import React from "react";
import ControlButton from "../ControlButton";
import LifePoints from "../LifePoints";

const MainLifeBoard = ({
  lifePoints,
  handleDecrementClick,
  handleIncrementClick,
}) => {
  return (
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
  );
};

export default MainLifeBoard;
