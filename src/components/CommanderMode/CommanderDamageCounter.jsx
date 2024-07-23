import React from "react";
import ControlButton from "../ControlButton";
import CommanderDamagePoints from "./CommanderDamagePoints";

const CommanderDamageCounter = ({
  opponentId,
  onCommanderLifeChange,
  commanderDamagePoints,
}) => {
  return (
    <div className="row-1 d-flex justify-content-between align-items-between mb-1">
      <p className="my-auto col-2">P{opponentId}</p>
      <ControlButton
        variant="secondary"
        value={"-"}
        handleClick={() => onCommanderLifeChange(-1)}
      />
      <CommanderDamagePoints commanderDamagePoints={commanderDamagePoints} />
      <ControlButton
        variant="primary"
        value={"+"}
        handleClick={() => onCommanderLifeChange(+1)}
      />
    </div>
  );
};

export default CommanderDamageCounter;
