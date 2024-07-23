import React from "react";
import { useGame } from "../GameContext";

const LifePointsDisplay = ({ lifePoints }) => {
  const { gameMode } = useGame();
  const style = {
    standard: {
      fontSize: "10rem",
      fontWeight: "bold",
      textShadow: "2px 2px 2px goldenrod",
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    commander: {
      fontSize: "4.5rem",
      fontWeight: "bold",
      textShadow: "2px 2px 2px goldenrod",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  const lifePointsStyle =
    gameMode === "Standard" ? style.standard : style.commander;

  return (
    <div className="display-1 mx-1" style={lifePointsStyle}>
      {lifePoints}
    </div>
  );
};

export default LifePointsDisplay;
