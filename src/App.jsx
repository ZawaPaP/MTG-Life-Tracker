import React, { useEffect, useState } from "react";
import "./App.css";
import CommanderGame from "./components/CommanderMode/CommanderGame";
import Copyright from "./components/Copyright";
import Header from "./components/Header/Header";
import HowToModal from "./components/HowToModal";
import OrientationWarning from "./components/OrientationWarning";
import Reset from "./components/Reset";
import StandardGame from "./components/StandardGame";
import { useGame } from "./GameContext";
import useOrientation from "./useOrientation";
import { handleReset } from "./utils";

const Game = () => {
  const { gameMode, players, setPlayers, isLoaded } = useGame();
  const isPortrait = useOrientation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClickReset = () => {
    handleReset(players, setPlayers, gameMode);
  };

  const getBackground = (gameMode) => {
    switch (gameMode) {
      case "Standard":
        return "background";
      case "Commander":
        return "background-commander";
      default:
        return "";
    }
  };

  return (
    <>
      {isPortrait && <OrientationWarning />}
      {isLoaded ? (
        <div className={`Game ${getBackground(gameMode)}`}>
          <Header />
          {showModal && <HowToModal onClose={handleCloseModal} />}
          {gameMode === "Standard" ? (
            <StandardGame />
          ) : gameMode === "Commander" ? (
            <CommanderGame players={players} />
          ) : null}
        </div>
      ) : (
        <div className="loading text-center vertical-middle">Loading...</div>
      )}{" "}
      <div className="footer">
        <Copyright />
        <Reset onClickReset={handleClickReset} />
      </div>
    </>
  );
};

export default Game;
