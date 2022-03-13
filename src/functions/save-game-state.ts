import { GameState } from "../definitions/game-state";
import packageData from "../../package.json";

export const saveGameState = (gameState: GameState) => {
  localStorage.setItem(packageData.name, JSON.stringify(gameState));
};
