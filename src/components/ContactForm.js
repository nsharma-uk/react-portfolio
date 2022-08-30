import * as React from "react";
//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";

// const style = {
//   // position: "absolute",
//   // top: "50%",
//   // left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80%",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//};

export const ContactForm = ({ isMobile }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [error, setError] = useState();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const form = useRef();

  const submitForm = () => {
    console.log("submit form fired");
    emailjs
      .sendForm(
        "service_88u91yd",
        "template_nnfmrx5",
        form.current,
        "5ve9E7Qxzb3mA--_J"
      )
      .then(
        (result) => {
          handleOpen();
          console.log(result.text);
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );
  };

  return (
    <Paper sx={{ p: 3, minWidth: isMobile ? "90%" : "400px" }} elevation={6}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Message sent</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you. I will get back to you as soon as I can!
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose}>OK</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/* <Box sx={style}>
        
      </Box> */}
      <Typography component="h4" variant="h4" align="center">
        {" "}
        Contact Me
      </Typography>

      <Stack
        component="form"
        sx={{
          p: 3,
        }}
        submitForm={handleSubmit(submitForm)}
        ref={form}
      >
        <Typography component="h6" variant="h6" align="center">
          Send me a message using the form or contact me using the links below
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Full Name"
            required
            error={!!errors.firstName}
            fullWidth
            sx={{
              p: 1,
            }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register("reply_to", {
              required: true,
            })}
            autocomplete="none"
            sx={{
              p: 1,
            }}
          />
          <TextField
            label="Message"
            multiline
            rows={5}
            fullWidth
            sx={{
              p: 1,
            }}
          />
        </Stack>

        <Stack spacing={2}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#ffe26a",
              color: "#16123f",
              "&:hover": { backgroundColor: "#75c9b7" },
            }}
          >
            Send message
          </Button>
          {error && (
            <Typography
              variant="caption"
              component="div"
              sx={{ color: "red" }}
              align="center"
            >
              Message failed to send. Please try again.
            </Typography>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
};
