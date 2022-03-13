import { PlayerState } from "../definitions/player-state";
import { Tool } from "../definitions/tool";

export const createPlayerState = (value?: Partial<PlayerState>) => ({
  coins: 0,
  tool: Tool.PLANTING,
  seeds: 0,
  waterLevel: 0,
  ...value,
});
