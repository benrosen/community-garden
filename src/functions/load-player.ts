import { Scene } from "phaser";
import { createAssetPath } from "./create-asset-path";

export const loadPlayer = (scene: Scene) => {
  scene.load.spritesheet("character", createAssetPath("character.png"), {
    frameWidth: 48,
    frameHeight: 48,
  });
};
