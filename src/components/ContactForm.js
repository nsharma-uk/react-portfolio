import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ContactForm = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={0} columnSpacing={0}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "#abd699",
              "&:hover": {
                backgroundColor: " #ffe26a",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "#abd699",
              "&:hover": {
                backgroundColor: "#ffe26a",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
