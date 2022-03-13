import { Paper, Stack, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { GameStateContext } from "./game-state-context";
import { Paid } from "@mui/icons-material";
import { useContext } from "react";

export const Wallet = () => {
  const [gameState] = useContext(GameStateContext);
  return (
    <Box
      sx={{
        mr: 2,
        mt: 2,
        position: "fixed",
        top: 0,
        right: 0,
      }}
    >
      <Paper elevation={10}>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{ alignItems: "center", padding: 1, pl: 2, pr: 2 }}
        >
          <Paid color="warning" />
          <Typography variant="h5">
            <strong>{Number(gameState.coins || 0).toLocaleString()}</strong>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};
