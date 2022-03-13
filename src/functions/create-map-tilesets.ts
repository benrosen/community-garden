import { Tilemaps } from "phaser";
import mapData from "../data/map.json";

export const createMapTilesets = (map: Tilemaps.Tilemap) => {
  mapData.tilesets.forEach((tileset) => {
    map.addTilesetImage(tileset.name);
  });
};
