import React from "react";
import { Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function rating({ width = "35px", rate = 3, height = "25px" }) {
  return (
    <Stack
      width={width}
      height={height}
      sx={{
        bgcolor: rate > 3 ? "green" : "red",
        borderRadius: "3px",
        padding: "2px",
      }}
      direction="row"
      alignItems="center"
    >
      <Typography sx={{ color: "white" }}>{rate}</Typography>
      <StarIcon sx={{ color: "white" }} size="small" />
    </Stack>
  );
}
