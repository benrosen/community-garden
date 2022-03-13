import { Scene } from "phaser";
import { configureMainCamera } from "./configure-main-camera";
import { createMap } from "./create-map";
import { createPlayer } from "./create-player";
import { handleGameStateChangedEvents } from "./handle-game-state-changed-events";

export const createScene = (scene: Scene) => {
  handleGameStateChangedEvents(scene);
  createMap(scene);
  createPlayer(scene);
  configureMainCamera(scene);
};
