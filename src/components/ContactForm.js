import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import emailjs from "@emailjs/browser";
import useRef from "react";

//import contact from "./contact.jpg";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export const ContactForm = () => {
  //const form = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_88u91yd",
  //       "template_nnfmrx5",
  //       form.current,
  //       "5ve9E7Qxzb3mA--_J"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         console.log("message sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#c7ddcc; opacity: 0.8",
      }}
    >
      <Box>
        <Typography component="h6" variant="h6" align="center">
          Send me a message using the form or contact me using the links in the
          footer
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          p: 3,
        }}
        // onSubmit={handleSubmit}
        // ref={form}
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
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            border: "1px red",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              fontWeight: 100,
              backgroundColor: "#ffe26a",
              color: "#16123f",
              "&:hover": { backgroundColor: "#75c9b7" },
            }}
          >
            {/* {" "} */}
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
