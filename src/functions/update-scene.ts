import { Scene } from "phaser";
import { updatePlayer } from "./update-player";

export const updateScene = (scene: Scene) => {
  updatePlayer(scene);
};
