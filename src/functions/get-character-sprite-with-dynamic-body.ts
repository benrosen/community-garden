import { Scene } from "phaser";

export const getCharacterSpriteWithDynamicBody = (scene: Scene) => {
  return scene.children.getByName(
    "character"
  ) as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
};
