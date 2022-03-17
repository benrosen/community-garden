import { Scene } from "phaser";
import { configureCollisions } from "./configure-collisions";
import { configureMainCamera } from "./configure-main-camera";
import { createMap } from "./create-map";
import { createPlayer } from "./create-player";
import { handleGameStateChangedEvents } from "./handle-game-state-changed-events";

export const createScene = (scene: Scene) => {
  handleGameStateChangedEvents(scene);
  const map = createMap(scene);
  createPlayer(scene);
  configureCollisions({ map, scene });
  configureMainCamera(scene);
};
