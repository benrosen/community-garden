import { Scene } from "phaser";
import { loadMap } from "./load-map";
import { loadPlayer } from "./load-player";

export const loadScene = (scene: Scene) => {
  loadMap(scene);
  loadPlayer(scene);
};
