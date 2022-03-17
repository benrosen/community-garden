import { Scene } from "phaser";
import { createPlayerAnimations } from "./create-player-animations";

export const createPlayer = (scene: Scene) => {
  createPlayerAnimations(scene);
  scene.physics.add
    .sprite(384, 384, "character")
    .setBodySize(8, 8, true)
    .setName("character");
};
