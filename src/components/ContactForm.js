import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
//import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
////import Card from "@mui/material/Card";
//import CardContent from "@mui/material/CardContent";

//import contactImage from "../images/Contact.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ContactForm = () => {
  return (
    <Grid container rowSpacing={0} columnSpacing={0}>
      <Grid item xs={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            //backgroundImage: { contactImage },
            backgroundColor: "#abd699",
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            border: "1px solid red",
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            Contact
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, #abd699, #c7ddcc)",
          border: "1px solid red",
        }}
      >
        <Box
          sx={{
            border: "1px solid red",
          }}
        >
          <Box
            component="form"
            sx={{
              p: 3,
            }}
          >
            <TextField
              label="Full Name"
              fullWidth
              autocomplete="none"
              sx={{
                p: 1,
              }}
            />
            <TextField
              label="Email"
              fullWidth
              autocomplete="none"
              sx={{
                p: 1,
              }}
            />
            <TextField
              label="Message"
              multiline
              rows={5}
              autocomplete="none"
              fullWidth
              sx={{
                p: 1,
              }}
            />
            <Button type="submit">Submit</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
