const handleLifePointsChange = (playerId, value, players, setPlayers) => {
  setPlayers(
    players.map((player) =>
      player.id === playerId
        ? { ...player, lifePoints: player.lifePoints + value }
        : player
    )
  );
};

const handleCommanderDamageChange = (
  playerId,
  opponentId,
  value,
  players,
  setPlayers
) => {
  setPlayers(
    players.map((player) =>
      player.id === playerId
        ? {
            ...player,
            commanderLife: player.commanderLife.map((commander) =>
              commander.player === opponentId
                ? { ...commander, damage: commander.damage + value }
                : commander
            ),
          }
        : player
    )
  );
};

const handleCommanderCostChange = (playerId, value, players, setPlayers) => {
  setPlayers(
    players.map((player) =>
      player.id === playerId
        ? { ...player, commanderCost: player.commanderCost + value }
        : player
    )
  );
};

const handleReset = (players, setPlayers, gameMode) => {
  if (gameMode === "Standard") {
    setPlayers(players.map((player) => ({ ...player, lifePoints: 20 })));
    return;
  } else {
    setPlayers(
      players.map((player) => ({
        ...player,
        lifePoints: 40,
        commanderCost: 0,
        commanderLife: player.commanderLife.map((player) => ({
          ...player,
          damage: 0,
        })),
      }))
    );
  }
};

export {
  handleCommanderCostChange,
  handleCommanderDamageChange,
  handleLifePointsChange,
  handleReset,
};
