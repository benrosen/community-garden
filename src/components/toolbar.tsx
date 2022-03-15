import {
  Box,
  LinearProgress,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import { GameStateContext } from "./game-state-context";
import { Intent } from "../definitions/intent";
import { Tool } from "../definitions/tool";
import ax from "../images/ax.png";
import seeds from "../images/seeds.png";
import { useContext } from "react";
import wateringCan from "../images/watering-can.png";

export const Toolbar = () => {
  const [gameState, dispatch] = useContext(GameStateContext);
  return (
    <Box
      sx={{
        bottom: 0,
        right: 0,
        mb: 2,
        mr: 2,
        position: "fixed",
      }}
    >
      <Paper elevation={20}>
        <ToggleButtonGroup
          exclusive
          onChange={(event, next) =>
            dispatch(
              (
                {
                  [Tool.HARVESTING]: Intent.EQUIP_HARVESTING_TOOL,
                  [Tool.PLANTING]: Intent.EQUIP_PLANTING_TOOL,
                  [Tool.WATERING]: Intent.EQUIP_WATERING_TOOL,
                } as { [key in Tool]: Intent }
              )[next as Tool]
            )
          }
          orientation="vertical"
          sx={{ width: "4.5rem" }}
          size="large"
          value={gameState.tool}
        >
          <ToggleButton value={Tool.PLANTING}>
            <Box sx={{ width: "100%" }}>
              <img
                alt="sixteen-bit brown paper seed packet"
                src={seeds}
                style={{
                  height: "2rem",
                  imageRendering: "pixelated",
                  width: "2rem",
                }}
              />
              <LinearProgress
                sx={{ height: "0.5rem" }}
                variant="determinate"
                value={gameState.seeds ?? 0}
                color="success"
              />
            </Box>
          </ToggleButton>
          <ToggleButton value={Tool.WATERING}>
            <Box sx={{ width: "100%" }}>
              <img
                alt="sixteen-bit metal watering can with the spout facing left"
                src={wateringCan}
                style={{
                  height: "2rem",
                  imageRendering: "pixelated",
                  width: "2rem",
                }}
              />
              <LinearProgress
                sx={{ height: "0.5rem" }}
                variant="determinate"
                value={gameState.waterLevel ?? 0}
                color="primary"
              />
            </Box>
          </ToggleButton>
          <ToggleButton sx={{ pt: 2.5, pb: 2.5 }} value={Tool.HARVESTING}>
            <img
              alt="sixteen-bit wood-handled ax facing left"
              src={ax}
              style={{
                height: "2rem",
                imageRendering: "pixelated",
                width: "2rem",
              }}
            />
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </Box>
  );
};
