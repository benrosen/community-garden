import { Scene } from "phaser";
import { getCharacterSpriteWithDynamicBody } from "./get-character-sprite-with-dynamic-body";
import mapData from "../data/map.json";

export const configureMainCamera = (scene: Scene) => {
  scene.cameras.main.zoom = 3;
  scene.cameras.main.setBounds(
    0,
    0,
    mapData.height * mapData.tileheight,
    mapData.width * mapData.tilewidth
  );
  const character = getCharacterSpriteWithDynamicBody(scene);
  scene.cameras.main.startFollow(character, false, 0.1, 0.1);
  scene.cameras.main.fadeIn(1000);
};
