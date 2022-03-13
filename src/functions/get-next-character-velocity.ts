import { Input, Math, Scene } from "phaser";

export const getNextCharacterVelocity = (scene: Scene) => {
  const up = scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.W);
  const down = scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.S);
  const left = scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.A);
  const right = scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.D);
  const nextXVelocity = left.isDown ? -1 : right.isDown ? 1 : 0;
  const nextYVelocity = up.isDown ? -1 : down.isDown ? 1 : 0;
  return new Math.Vector2(
    nextYVelocity === 0 ? nextXVelocity : 0,
    nextYVelocity
  );
};
