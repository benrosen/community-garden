import { Game, Scene } from "phaser";
import { useContext, useEffect, useRef, useState } from "react";

import { Box } from "@mui/material";
import { GameEvent } from "../definitions/game-event";
import { GameStateContext } from "./game-state-context";
import { Intent } from "../definitions/intent";
import { createScene } from "../functions/create-scene";
import { loadScene } from "../functions/load-scene";
import packageData from "../../package.json";
import { saveGameState } from "../functions/save-game-state";
import { updateScene } from "../functions/update-scene";

export const GameElement = () => {
  const parentElementRef = useRef();
  const [gameState, dispatch] = useContext(GameStateContext);
  const [gameInstance, setGameInstance] = useState<Game>();
  useEffect(() => {
    saveGameState(gameState);
  }, [gameState]);
  useEffect(() => {
    new Game({
      backgroundColor: 0x000000,
      callbacks: {
        postBoot: (bootedGameInstance: Game) => {
          setGameInstance(() => bootedGameInstance);
        },
      },
      physics: { default: "arcade" },
      pixelArt: true,
      scale: {
        mode: Phaser.Scale.RESIZE,
        parent: parentElementRef.current,
      },
      scene: {
        preload: function (this: Scene) {
          loadScene(this);
        },
        create: function (this: Scene) {
          createScene(this);
        },
        update: function (this: Scene) {
          updateScene(this);
        },
      },
      title: packageData.name,
      url: packageData.homepage,
      version: packageData.version,
    });
    return () => {
      setGameInstance((gameInstance) => {
        return void gameInstance?.destroy(true);
      });
    };
  }, [setGameInstance]);
  useEffect(() => {
    gameInstance?.events.emit(GameEvent.GAME_STATE_CHANGED, gameState);
  }, [gameInstance?.events, gameState]);
  useEffect(() => {
    const eventIntents: [GameEvent, Intent][] = [
      [GameEvent.HARVEST, Intent.HARVEST],
      [GameEvent.PLANT, Intent.PLANT],
      [GameEvent.PURCHASE_SEED, Intent.PURCHASE_SEED],
      [GameEvent.REFILL_WATER, Intent.REFILL_WATER],
      [GameEvent.WATER, Intent.WATER],
    ];
    eventIntents.forEach(([event, intent]) => {
      gameInstance?.events.on(event, () => {
        dispatch(intent);
      });
    });
    return () => {
      eventIntents.forEach(([event]) => {
        gameInstance?.events.off(event);
      });
    };
  }, [dispatch, gameInstance?.events]);
  return (
    <Box ref={parentElementRef} sx={{ width: "100vw", height: "100vh" }} />
  );
};
