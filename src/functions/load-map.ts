import { Scene } from "phaser";
import { loadMapData } from "./load-map-data";
import { loadMapTilesets } from "./load-map-tilesets";

export const loadMap = (scene: Scene) => {
  loadMapData(scene);
  loadMapTilesets(scene);
};
