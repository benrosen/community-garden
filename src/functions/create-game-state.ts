import { GameState } from "../definitions/game-state";
import { createMapState } from "./create-map-state";
import { createPlayerState } from "./create-player-state";

export const createGameState = (value?: Partial<GameState>): GameState => ({
  ...createPlayerState(),
  ...createMapState(),
  ...value,
});
