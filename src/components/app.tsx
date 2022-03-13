import { CssBaseline, Fade } from "@mui/material";

import { GameElement } from "./game-element";
import { GameStateContext } from "./game-state-context";
import { Toolbar } from "./toolbar";
import { Wallet } from "./wallet";
import { useGameState } from "../functions/use-game-state";

export const App = () => {
  const gameState = useGameState();
  return (
    <CssBaseline>
      <GameStateContext.Provider value={gameState}>
        <GameElement />
        <Fade in={true} timeout={1000}>
          <div>
            <Wallet />
            <Toolbar />
          </div>
        </Fade>
      </GameStateContext.Provider>
    </CssBaseline>
  );
};
