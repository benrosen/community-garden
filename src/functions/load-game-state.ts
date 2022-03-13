import { GameState } from "../definitions/game-state";
import { createGameState } from "./create-game-state";
import packageData from "../../package.json";

export const loadGameState = (): GameState => {
  const gameState = localStorage.getItem(packageData.name);
  return gameState ? JSON.parse(gameState) : createGameState();
};
