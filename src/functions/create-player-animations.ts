import { Scene } from "phaser";
import characterAnimationData from "../data/character-animations.json";

export const createPlayerAnimations = (scene: Scene) => {
  (characterAnimationData as [string, number[]][]).forEach(
    ([key, frameNumbers]) => {
      scene.anims.create({
        frames: scene.anims.generateFrameNumbers("character", {
          frames: frameNumbers,
        }),
        frameRate: 8,
        key,
        repeat: -1,
      });
    }
  );
};
