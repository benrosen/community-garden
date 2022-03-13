import { Math } from "phaser";

export const getCharacterAnimationKey = (
  nextVelocity: Math.Vector2
): string => {
  if (nextVelocity.equals(Math.Vector2.DOWN)) {
    return "walk-front";
  } else if (nextVelocity.equals(Math.Vector2.LEFT)) {
    return "walk-left";
  } else if (nextVelocity.equals(Math.Vector2.RIGHT)) {
    return "walk-right";
  } else if (nextVelocity.equals(Math.Vector2.UP)) {
    return "walk-back";
  } else {
    return "idle-front";
  }
};
