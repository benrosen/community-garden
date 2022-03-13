import { Scene } from "phaser";
import { createAssetPath } from "./create-asset-path";
import mapData from "../data/map.json";

export const loadMapTilesets = (scene: Scene) => {
  mapData.tilesets.forEach((tileset) => {
    scene.load.image(
      tileset.name,
      createAssetPath(
        tileset.image.substring(tileset.image.lastIndexOf("/") + 1)
      )
    );
  });
};
