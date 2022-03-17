import { Scene, Tilemaps } from "phaser";

import { getCharacterSpriteWithDynamicBody } from "./get-character-sprite-with-dynamic-body";

export const configureCollisions = (props: {
  map: Tilemaps.Tilemap;
  scene: Scene;
}) => {
  const player = getCharacterSpriteWithDynamicBody(props.scene);
  props.map.layers.forEach((layer) => {
    layer.tilemapLayer.setCollisionByProperty({ isObstacle: true });
    props.scene.physics.add.collider(layer.tilemapLayer, player);
  });
};
