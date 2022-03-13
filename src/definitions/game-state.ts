import { MapState } from "./map-state";
import { PlayerState } from "./player-state";

export type GameState = PlayerState & MapState;
