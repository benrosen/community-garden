import { Scene } from "phaser";

export const createCursorKeys = (scene: Scene) => {
  scene.input.keyboard.createCursorKeys();
};
