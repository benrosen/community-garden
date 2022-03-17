import { Tilemaps } from "phaser";
import mapData from "../data/map.json";

export const createMapLayers = (map: Tilemaps.Tilemap) => {
  mapData.layers.forEach((layerData) => {
    const layer = map.createLayer(
      layerData.name,
      map.getTileset(layerData.name)
    );
    layer.setCollisionByProperty({ isObstacle: true });
  });
};
