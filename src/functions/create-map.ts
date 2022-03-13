import { Scene } from "phaser";
import { createMapLayers } from "./create-map-layers";
import { createMapTilesets } from "./create-map-tilesets";

export const createMap = (scene: Scene) => {
  const map = scene.make.tilemap({ key: "map" });
  createMapTilesets(map);
  createMapLayers(map);
};
