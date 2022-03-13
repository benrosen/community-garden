import { Input, Scene } from "phaser";

import { createPlayerAnimations } from "./create-player-animations";

export const createPlayer = (scene: Scene) => {
  createPlayerAnimations(scene);
  scene.physics.add.sprite(384, 384, "character").setName("character");
};
