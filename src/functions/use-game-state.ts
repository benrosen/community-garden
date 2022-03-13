import { GameState } from "../definitions/game-state";
import { Intent } from "../definitions/intent";
import { Tool } from "../definitions/tool";
import { loadGameState } from "./load-game-state";
import { useReducer } from "react";

export const useGameState = () =>
  useReducer(
    (state: GameState, action: Intent) => ({
      ...state,
      ...(
        {
          [Intent.EQUIP_HARVESTING_TOOL]: { tool: Tool.HARVESTING },
          [Intent.EQUIP_PLANTING_TOOL]: { tool: Tool.PLANTING },
          [Intent.EQUIP_WATERING_TOOL]: { tool: Tool.WATERING },
          [Intent.HARVEST]: {
            coins:
              state.tool === Tool.HARVESTING ? state.coins + 1 : state.coins,
          },
          [Intent.PLANT]: {
            seeds:
              state.tool === Tool.PLANTING
                ? state.seeds > 0
                  ? state.seeds - 1
                  : 0
                : state.seeds,
          },
          [Intent.WATER]: {
            waterLevel:
              state.tool === Tool.WATERING
                ? state.waterLevel <= 0
                  ? 0
                  : state.waterLevel - 1
                : state.waterLevel,
          },
          [Intent.PURCHASE_SEED]:
            state.coins > 0 && state.seeds < 100
              ? { coins: state.coins - 1, seeds: state.seeds + 1 }
              : {},
          [Intent.REFILL_WATER]: {
            waterLevel:
              state.tool === Tool.WATERING
                ? state.waterLevel >= 100
                  ? 100
                  : state.waterLevel + 1
                : state.waterLevel,
          },
        } as { [key in Intent]: Partial<GameState> }
      )[action],
    }),
    loadGameState()
  );
