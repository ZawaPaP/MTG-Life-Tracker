import React, { createContext, useContext, useEffect, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState("Standard");
  const [players, setPlayers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    switch (gameMode) {
      case "Standard":
        setPlayers([
          { id: 1, lifePoints: 20 },
          { id: 2, lifePoints: 20 },
        ]);
        break;
      case "Commander":
        setPlayers([
          {
            id: 1,
            lifePoints: 40,
            commanderCost: 0,
            commanderLife: [
              { player: 2, damage: 0 },
              { player: 3, damage: 0 },
              { player: 4, damage: 0 },
            ],
          },
          {
            id: 2,
            lifePoints: 40,
            commanderCost: 0,
            commanderLife: [
              { player: 1, damage: 0 },
              { player: 3, damage: 0 },
              { player: 4, damage: 0 },
            ],
          },
          {
            id: 3,
            lifePoints: 40,
            commanderCost: 0,
            commanderLife: [
              { player: 1, damage: 0 },
              { player: 2, damage: 0 },
              { player: 4, damage: 0 },
            ],
          },
          {
            id: 4,
            lifePoints: 40,
            commanderCost: 0,
            commanderLife: [
              { player: 1, damage: 0 },
              { player: 2, damage: 0 },
              { player: 3, damage: 0 },
            ],
          },
        ]);
        break;
      default:
        setPlayers([]);
    }
  }, [gameMode]);

  useEffect(() => {
    setIsLoaded(false);
  }, [gameMode]);

  useEffect(() => {
    setIsLoaded(true);
  }, [players]);

  return (
    <GameContext.Provider
      value={{
        gameMode,
        setGameMode,
        players,
        setPlayers,
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
