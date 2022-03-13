import { Scene } from "phaser";

export const isKeyDown = (props: { keyCode: number; scene: Scene }) => {
  return props.scene.input.keyboard.checkDown(
    props.scene.input.keyboard.addKey(props.keyCode)
  );
};
