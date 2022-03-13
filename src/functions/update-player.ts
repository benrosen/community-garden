import { Scene } from "phaser";
import { getCharacterAnimationKey } from "./get-character-animation-key";
import { getCharacterSpriteWithDynamicBody } from "./get-character-sprite-with-dynamic-body";
import { getNextCharacterVelocity } from "./get-next-character-velocity";

export const updatePlayer = (scene: Scene) => {
  const character = getCharacterSpriteWithDynamicBody(scene);
  const speed = 16;
  const nextVelocity = getNextCharacterVelocity(scene);
  const nextAnimationKey = getCharacterAnimationKey(nextVelocity);
  character.play(nextAnimationKey, true);
  character.setVelocity(nextVelocity.x * speed, nextVelocity.y * speed);
};
