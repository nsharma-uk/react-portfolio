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
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

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
          handleOpenModal();
          console.log(result.text);
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );
  };

  return (
    <Paper
      sx={{ p: 3, minWidth: isMobile ? "100%" : "400px", color: "#abd699" }}
      elevation={3}
    >
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Message sent</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you. I will get back to you as soon as I can!
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleCloseModal} sx={{ alignItems: "center" }}>
              OK
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/* <Box sx={style}>
        
      </Box> */}
      <Typography
        component="h4"
        align="center"
        fontWeight={600}
        sx={{ paddingTop: "50px" }}
      >
        {" "}
        Contact Me
      </Typography>

      <Stack
        component="form"
        sx={{
          p: 3,
        }}
        // submitForm={handleSubmit(submitForm)}
        ref={form}
      >
        <Typography component="h6" variant="h6" align="center">
          Send me a message using the form or contact me using the links below
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Full Name"
            error={!!errors.from_name}
            required
            fullWidth
            sx={{
              p: 1,
            }}
            helperText={!!errors.from_name ? "Please enter a valid name." : ""}
            {...register("from_name", {
              required: true,
            })}
          />
          <TextField
            error={!!errors.email}
            label="Email"
            type="email"
            fullWidth
            required
            sx={{
              p: 1,
            }}
            helperText={!!errors.email ? "Please enter a valid email." : ""}
            {...register("email", {
              required: true,
            })}
          />
          <TextField
            error={!!errors.message}
            label="Message"
            multiline
            required
            rows={5}
            fullWidth
            sx={{
              p: 1,
            }}
            helperText={!!errors.message ? "Please enter a valid message" : ""}
            {...register("message", {
              required: true,
            })}
          />
        </Stack>

        <Stack spacing={2}>
          <Button
            onClick={handleSubmit(submitForm)}
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#abd699",
              color: "#16123f",
              "&:hover": { backgroundColor: "#ffe26a" },
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
