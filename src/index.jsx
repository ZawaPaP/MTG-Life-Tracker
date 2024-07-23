import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { GameProvider } from "./GameContext";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <GameProvider>
    <App />
  </GameProvider>
);
