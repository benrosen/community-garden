import { Dispatch } from "react";
import { GameState } from "../definitions/game-state";
import { Intent } from "../definitions/intent";
import { createContext } from "react";
import { loadGameState } from "../functions/load-game-state";

export const GameStateContext = createContext<[GameState, Dispatch<Intent>]>([
  loadGameState(),
  () => {},
]);
