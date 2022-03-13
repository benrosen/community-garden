import { Scene } from "phaser";
import mapData from "../data/map.json";

export const loadMapData = (scene: Scene) => {
  scene.load.tilemapTiledJSON("map", mapData);
};
