import { GameEvent } from "../definitions/game-event";
import { GameState } from "../definitions/game-state";
import { Scene } from "phaser";
import { configureCursor } from "./configure-cursor";

export const handleGameStateChangedEvents = (scene: Scene) => {
  scene.game.events.on(GameEvent.GAME_STATE_CHANGED, (gameState: GameState) => {
    configureCursor({ scene, tool: gameState.tool });
  });
};
