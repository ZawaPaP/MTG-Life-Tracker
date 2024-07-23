import React, { useState } from "react";
import { useGame } from "../../GameContext";
import ConfigModalWrapper from "./ConfigModalWrapper";
import Menu from "./Menu";

const Header = () => {
  const { gameMode } = useGame();
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const handleConfigOpen = () => setIsConfigOpen(true);
  const handleConfigClose = () => setIsConfigOpen(false);

  return (
    <>
      {gameMode === "Standard" ? (
        <div
          className="header d-flex justify-content-end align-items-start"
          style={{ height: "100px" }}
        >
          <Menu onClick={handleConfigOpen} isShow={!isConfigOpen} />
          <ConfigModalWrapper
            isOpen={isConfigOpen}
            onClose={handleConfigClose}
          />
        </div>
      ) : gameMode === "Commander" ? (
        <div className="header d-flex justify-content-end align-items-start">
          <Menu onClick={handleConfigOpen} isShow={!isConfigOpen} />
          <ConfigModalWrapper
            isOpen={isConfigOpen}
            onClose={handleConfigClose}
          />
        </div>
      ) : null}
    </>
  );
};

export default Header;
