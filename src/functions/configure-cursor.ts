import { Scene } from "phaser";
import { Tool } from "../definitions/tool";
import { createAssetPath } from "./create-asset-path";

export const configureCursor = (props: { scene: Scene; tool: Tool }) => {
  props.scene.input.setDefaultCursor(
    `url(${createAssetPath(
      {
        [Tool.HARVESTING]: "ax-cursor.png",
        [Tool.PLANTING]: "seeds-cursor.png",
        [Tool.WATERING]: "watering-can-cursor.png",
      }[props.tool]
    )}), auto`
  );
};
