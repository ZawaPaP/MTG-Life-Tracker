import React from "react";
import { useGame } from "../GameContext";

const PlayerName = ({ playerId }) => {
  const { gameMode } = useGame();
  const playerNameColor = ["red", "blue", "green", "purple"];
  const style = {
    standard: {
      fontSize: "2rem",
      fontWeight: "italic",
      color: playerNameColor[playerId - 1],
      textShadow: "2px 2px 2px goldenrod",
      width: "90%",
    },
    commander: {
      fontSize: "1rem",
      fontWeight: "italic",
      color: playerNameColor[playerId - 1],
      textShadow: "1px 1px 1px goldenrod",
    },
  };

  const PlayerNameStyle =
    gameMode === "Standard" ? style.standard : style.commander;

  return <div style={PlayerNameStyle}>{`Player ${playerId}`}</div>;
};

export default PlayerName;
